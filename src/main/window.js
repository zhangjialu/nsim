import { BrowserWindow } from 'electron'

const windows = new Set()

const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

const createWindow = () => {
  let newWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    show: false
  })

  newWindow.loadURL(winURL)

  newWindow.once('ready-to-show', () => {
    newWindow.show()
  })

  newWindow.on('closed', () => {
    windows.delete(newWindow)
    newWindow = null
  })

  windows.add(newWindow)

  return newWindow
}

export default createWindow
