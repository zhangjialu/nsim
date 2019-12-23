import { jsPlumb } from 'jsplumb'
import store from '../store'

export const getJspInstance = () => {
  const jsp = jsPlumb.getInstance({
    Connector: ['Flowchart'],
    // Connector: ['Flowchart', { stub: -5 }],
    Endpoint: ['Dot', { radius: 7 }],
    EndpointStyle: { fill: 'transparent' },
    EndpointHoverStyle: { fill: 'rgba(128,203,196,0.5)' },
    PaintStyle: {
      stroke: '#555',
      strokeWidth: 1,
      outlineStroke: 'transparent',
      outlineWidth: 5
    },
    ConnectionOverlays: [
      [
        'Arrow',
        {
          location: 1,
          id: 'arrow',
          width: 7,
          length: 12,
          foldback: 1
        }
      ]
    ],
    HoverPaintStyle: { stroke: '#80cbc4' },
    DragOptions: {
      containment: false
      // grid: [5, 5]
    }
  })

  jsp.bind('beforeDrop', ({ sourceId, targetId, connection, dropEndpoint }) => {
    console.log(connection.connector)
    console.log(connection.connector.path)
    console.log(connection.connector.findSegmentForPoint())
    const { modules } = store.state.editor.currentFile.data
    const sourceModule = modules.filter(module => module.id === sourceId)[0]

    const targetModule = modules.filter(module => module.id === targetId)[0]
    const sourceAnchorObj = connection.endpoints[0].anchor
    const targetAnchorObj = dropEndpoint.anchor
    const sourceAnchor = [
      sourceAnchorObj.x,
      sourceAnchorObj.y,
      ...sourceAnchorObj.orientation,
      ...sourceAnchorObj.offsets
    ]
    const targetAnchor = [
      targetAnchorObj.x,
      targetAnchorObj.y,
      ...targetAnchorObj.orientation,
      ...targetAnchorObj.offsets
    ]
    const sourcePort = sourceModule.outputPorts.filter(
      port => port.anchor.toString() === sourceAnchor.toString()
    )[0].name
    const targetPort = targetModule.inputPorts.filter(
      port => port.anchor.toString() === targetAnchor.toString()
    )[0].name
    // console.log(sourcePort, targetPort)
    // console.log(sourceAnchor, targetAnchor)
    // console.log(connection.id)
    const connect = {
      id: connection.id,
      source: {
        moduleId: sourceModule.id,
        moduleType: sourceModule.type,
        portName: sourcePort,
        anchor: sourceAnchor
      },
      target: {
        moduleId: targetModule.id,
        moduleType: targetModule.type,
        portName: targetPort,
        anchor: targetAnchor
      }
    }
    // console.log(connect)
    const { currentFile } = store.state.editor
    store.dispatch('UPDATE_CURRENT_FILE', {
      ...currentFile,
      data: {
        ...currentFile.data,
        connectInfo: [...currentFile.data.connectInfo, connect]
      }
    })
    return true
  })

  jsp.bind('beforeDetach', connection => {
    const { currentFile } = store.state.editor
    const newConnectInfo = currentFile.data.connectInfo.filter(
      conn => conn.id !== connection.id
    )
    // console.log(newConnectInfo)
    store.dispatch('UPDATE_CURRENT_FILE', {
      ...currentFile,
      data: {
        ...currentFile.data,
        connectInfo: newConnectInfo
      }
    })
    return true
  })

  return jsp
}
