import * as actions from '../actions/help'

const help = {
  label: '帮助',
  role: 'help',
  submenu: [
    {
      label: '测试',
      click(item, focusedWindow) {
        actions.test(focusedWindow)
      }
    }
  ]
}

export default help
