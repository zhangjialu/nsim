import logicModules from './modules/logic'
import Queue from './Queue'

const moduleInstances = {}

const scan = (currentFile, time) => {
  const { modules, connectInfo } = currentFile.data

  const moduleDeps = {}

  // 生成 module 实例并设置 params
  modules.forEach(module => {
    let isNeedNewModuleInstance = false
    if (!moduleInstances[module.id]) {
      isNeedNewModuleInstance = true
    } else {
      const instanceParams = moduleInstances[module.id].params

      if (
        module.params !== [] &&
        module.params.some(
          param =>
            parseInt(param.value) !== parseInt(instanceParams[param.name])
        )
      ) {
        isNeedNewModuleInstance = true
      }
    }
    if (isNeedNewModuleInstance) {
      const moduleInstance = new logicModules[module.type]()
      moduleInstances[module.id] = moduleInstance
      const params = module.params.reduce((acc, next) => {
        acc[next.name] = next.value
        return acc
      }, {})
      moduleInstance.setParams(params)
    }
    moduleInstances[module.id].setTime(time)
  })

  Object.keys(moduleInstances).forEach(key => {
    moduleDeps[key] = []
  })

  // 设置 module 的依赖关系
  connectInfo.forEach(({ source, target }) => {
    moduleDeps[target.moduleId].push({
      moduleId: source.moduleId,
      moduleName: source.moduleType + source.moduleId,
      sourcePortName: source.portName,
      targetPortName: target.portName
    })
  })
  // console.log('moduleDeps', moduleDeps)

  const moduleInstancesQueue = new Queue(modules.length)
  modules.forEach(module => moduleInstancesQueue.enqueue(module.id))

  // console.log(moduleInstancesQueue.print())
  while (!moduleInstancesQueue.isEmpty()) {
    const moduleId = moduleInstancesQueue.front()
    const deps = moduleDeps[moduleId]
    // console.log(moduleId)

    let canProcess = true
    deps.forEach(dep => {
      if (moduleInstancesQueue.isExist(dep.moduleId)) {
        canProcess = false
      }
    })

    if (canProcess) {
      const targetModuleInstance = moduleInstances[moduleId]
      deps.forEach((dep, index) => {
        // const index = deps.findIndex(item => item.moduleName === dep)
        const { sourcePortName, targetPortName } = deps[index]
        targetModuleInstance.setInputs({
          [targetPortName]:
            moduleInstances[dep.moduleId].outputPorts[sourcePortName]
        })
      })
      targetModuleInstance.process()

      moduleInstancesQueue.dequeue()
    } else {
      moduleInstancesQueue.dequeue()
      moduleInstancesQueue.enqueue(moduleId)
    }
  }

  // console.log(moduleInstances)

  const newModules = [...currentFile.data.modules]
  newModules.forEach(module => {
    const targetModuleInstance = moduleInstances[module.id]
    module.inputPorts.forEach(port => {
      port.value = targetModuleInstance.inputPorts[port.name]
    })
    module.outputPorts.forEach(port => {
      port.value = targetModuleInstance.outputPorts[port.name]
    })
  })

  const newConnectInfo = [...currentFile.data.connectInfo]
  newConnectInfo.forEach(conn => {
    const targetModuleInstance = moduleInstances[conn.source.moduleId]
    conn.value = targetModuleInstance.outputPorts[conn.source.portName]
  })

  const simulateResults = {
    ...currentFile,
    data: {
      ...currentFile.data,
      modules: newModules,
      connectInfo: newConnectInfo
    }
  }

  return simulateResults
}

export default scan
