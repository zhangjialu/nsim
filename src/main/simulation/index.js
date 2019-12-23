import logicModules from './modules/logic'
import Queue from './Queue'

const moduleInstances = {}

const scan = (currentFile, time) => {
  const { modules, connectInfo } = currentFile.data

  // 生成 module 实例并设置 params
  modules.forEach(module => {
    let isNeedNewModuleInstance = false

    // 当 module 实例不存在或者 module 实例存在但是参数发生了改变，则重新生成实例
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

  // 设置 module 的输入
  connectInfo.forEach(({ source, target }) => {
    moduleInstances[target.moduleId].setInputs({
      [target.portName]:
        moduleInstances[source.moduleId].outputPorts[source.portName]
    })
  })

  // 计算
  Object.keys(moduleInstances).forEach(moduleId => {
    moduleInstances[moduleId].process()
  })

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
