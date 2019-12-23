import { Menu } from 'electron'

import nsim from './nsim'
import file from './file'
import edit from './edit'
import debug from './debug'
import help from './help'

const template = [file, edit, debug, help]

if (process.platform === 'darwin') {
  template.unshift(nsim)
}

export default Menu.buildFromTemplate(template)
