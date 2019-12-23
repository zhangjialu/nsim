import store from '../../store'
import bus from '../../bus'

export const remove = () => {
  // 将 selectedModule 从 currentFile 中移除，同时移除所有连接线
  const { currentFile, selectedModule } = store.state.editor
  const index = currentFile.data.modules.findIndex(
    module => module.id === selectedModule.id
  )
  const newModules = currentFile.data.modules.filter(
    module => module.id !== selectedModule.id
  )
  const newConnectInfo = currentFile.data.connectInfo.filter(
    conn =>
      conn.source.moduleId !== selectedModule.id &&
      conn.target.moduleId !== selectedModule.id
  )

  const newCurrentFile = {
    ...currentFile,
    data: {
      ...currentFile.data,
      modules: newModules,
      connectInfo: newConnectInfo
    }
  }
  store.dispatch('UPDATE_SELECTED_MODULE', null)
  store.dispatch('UPDATE_CURRENT_FILE', newCurrentFile)
  bus.$emit('remove-module', selectedModule.id)
}

// 逆时针旋转
const rotate = ({ x, y, x0 = 0, y0 = 0, theta }) => {
  const deltaX = x - x0
  const deltaY = y - y0
  const sinTheta = Math.sin((theta / 180) * Math.PI)
  const cosTheta = Math.cos((theta / 180) * Math.PI)
  const x1 = deltaX * cosTheta - deltaY * sinTheta + x0
  const y1 = deltaX * sinTheta + deltaY * cosTheta + y0
  return {
    x: parseFloat(x1.toFixed(2)),
    y: parseFloat(y1.toFixed(2))
  }
}

const rotatePort = (port, theta) => {
  const [x, y, dx, dy, offsetx, offsety] = port.anchor
  const { x: newX, y: newY } = rotate({ x, y, x0: 0.5, y0: 0.5, theta })
  const { x: newDx, y: newDy } = rotate({ x: dx, y: dy, x0: 0, y0: 0, theta })
  const { x: newOffsetx, y: newOffsety } = rotate({
    x: offsetx,
    y: offsety,
    x0: 0,
    y0: 0,
    theta
  })
  return {
    ...port,
    anchor: [newX, newY, newDx, newDy, newOffsetx, newOffsety]
  }
}

export const rotateModule = theta => {
  // 将 selectedModule 顺时针或逆时针旋转
  const { currentFile, selectedModule } = store.state.editor
  // let newModule = { ...selectedModule }
  selectedModule.inputPorts = selectedModule.inputPorts.map(port =>
    rotatePort(port, theta)
  )
  selectedModule.outputPorts = selectedModule.outputPorts.map(port =>
    rotatePort(port, theta)
  )
  const newModule = {
    ...selectedModule,
    image: {
      ...selectedModule.image,
      rotateAngle: selectedModule.image.rotateAngle + theta
    }
  }

  store.dispatch('UPDATE_SELECTED_MODULE', newModule)

  const index = currentFile.data.modules.findIndex(
    module => module.id === newModule.id
  )
  const newModules = [
    ...currentFile.data.modules.slice(0, index),
    newModule,
    ...currentFile.data.modules.slice(index + 1)
  ]

  const { connectInfo } = currentFile.data
  const newConnectInfo = [...connectInfo]
  newConnectInfo.forEach(conn => {
    const { source, target } = conn
    if (source.moduleId === newModule.id) {
      source.anchor = newModule.outputPorts.find(
        port => port.name === source.portName
      ).anchor
    }
    if (target.moduleId === newModule.id) {
      target.anchor = newModule.inputPorts.find(
        port => port.name === target.portName
      ).anchor
    }
  })
  store.dispatch('UPDATE_CURRENT_FILE', {
    ...currentFile,
    data: {
      ...currentFile.data,
      connectInfo: newConnectInfo,
      modules: newModules
    }
  })

  bus.$emit('rotate-module')
}
