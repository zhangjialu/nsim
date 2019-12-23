import * as actions from '../actions/file'

const file = {
  label: '文件',
  submenu: [
    {
      label: '新建文件',
      accelerator: 'CmdOrCtrl+N',
      click(item, focusedWindow) {
        actions.newFile(focusedWindow)
      }
    },
    {
      label: '新建窗口',
      accelerator: 'Shift+CmdOrCtrl+N',
      click(item, focusedWindow) {
        actions.newWindow()
      }
    },
    { type: 'separator' },
    {
      label: '打开文件',
      accelerator: 'CmdOrCtrl+O',
      click(item, focusedWindow) {
        actions.openFile(focusedWindow)
      }
    },
    {
      label: '打开文件夹',
      accelerator: 'Shift+CmdOrCtrl+O',
      click(item, focusedWindow) {
        actions.openFolder(focusedWindow)
      }
    },
    { type: 'separator' },
    {
      label: '保存',
      accelerator: 'CmdOrCtrl+S',
      click(item, focusedWindow) {
        actions.save(focusedWindow)
      }
    }
  ]
}

export default file
