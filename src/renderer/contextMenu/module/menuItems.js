import * as contextMenu from './actions'

export const SEPARATOR = {
  type: 'separator'
}

export const COPY = {
  label: '复制',
  click(menuItem, browserWindow) {
    // contextMenu.remove()
  }
}

export const CUT = {
  label: '剪切',
  click(menuItem, browserWindow) {
    // contextMenu.remove()
  }
}

export const DELETE = {
  label: '删除',
  click(menuItem, browserWindow) {
    contextMenu.remove()
  }
}

export const ROTATE = {
  label: '旋转',
  submenu: [
    {
      label: '顺时针旋转90°',
      click(menuItem, browserWindow) {
        contextMenu.rotateModule(90)
      }
    },
    {
      label: '顺时针旋转180°',
      click(menuItem, browserWindow) {
        contextMenu.rotateModule(180)
      }
    },
    {
      label: '逆时针旋转90°',
      click(menuItem, browserWindow) {
        contextMenu.rotateModule(-90)
      }
    },
    {
      label: '逆时针旋转180°',
      click(menuItem, browserWindow) {
        contextMenu.rotateModule(-180)
      }
    }
  ]
}
