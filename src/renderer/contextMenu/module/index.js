import { remote } from 'electron'
import { COPY, CUT, DELETE, ROTATE } from './menuItems'

const { Menu, MenuItem } = remote

export const showContextMenu = e => {
  const menu = new Menu()
  const win = remote.getCurrentWindow()
  const CONTEXT_ITEMS = [COPY, CUT, DELETE, ROTATE]

  CONTEXT_ITEMS.forEach(item => {
    menu.append(new MenuItem(item))
  })
  menu.popup({ window: win })
}
