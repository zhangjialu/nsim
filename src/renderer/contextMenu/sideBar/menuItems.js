import * as contextMenu from './actions'

export const SEPARATOR = {
  type: 'separator'
}

export const NEW_FILE = {
  label: '新建文件',
  id: 'newFileMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.newFile()
  }
}

export const NEW_DIRECTORY = {
  label: '新建文件夹',
  id: 'newDirectoryMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.newDirectory()
  }
}

export const COPY = {
  label: '复制',
  id: 'copyMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.copy()
  }
}

export const CUT = {
  label: '剪切',
  id: 'cutMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.cut()
  }
}

export const PASTE = {
  label: '粘贴',
  id: 'pasteMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.paste()
  }
}

export const RENAME = {
  label: '重命名',
  id: 'renameMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.rename()
  }
}

export const DELETE = {
  label: '删除',
  id: 'deleteMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.remove()
  }
}

export const SHOW_IN_FOLDER = {
  label: '在资源管理器中显示',
  id: 'showInFolderMenuItem',
  click(menuItem, browserWindow) {
    contextMenu.showInFolder()
  }
}
