import * as actions from '../actions/debug'

const debug = {
  label: '调试',
  submenu: [
    {
      label: '运行',
      accelerator: 'F5',
      click(item, focusedWindow) {
        actions.simulate(focusedWindow)
      }
    },
    {
      label: '停止运行',
      accelerator: 'CmdOrCtrl+F5',
      click(item, focusedWindow) {
        actions.stopSimulation(focusedWindow)
      }
    },
    {
      label: '单步运行',
      accelerator: 'F6',
      click(item, focusedWindow) {
        actions.oneStepSimulate(focusedWindow)
      }
    },
    {
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      role: 'reload'
    },
    {
      label: 'Toggle Developer Tools',
      accelerator: 'F12',
      role: 'toggleDevTools'
    }
  ]
}

export default debug
