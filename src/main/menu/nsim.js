const name = 'Nsim'

const nsim = {
  label: name,
  submenu: [
    { label: `About ${name}`, role: 'about' },
    { type: 'separator' },
    {
      label: 'Services',
      role: 'services',
      submenu: []
    },
    { type: 'separator' },
    { label: `Hide ${name}`, accelerator: 'Command+H', role: 'hide' },
    {
      label: 'Hide Others',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    },
    {
      label: 'Show All',
      role: 'unhide'
    },
    { type: 'separator' },
    {
      label: `Quit ${name}`,
      accelerator: 'Command+Q',
      click() {
        app.quit()
      }
    }
  ]
}

export default nsim
