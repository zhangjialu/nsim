import { ipcMain, BrowserWindow } from 'electron'
// import { PythonShell } from 'python-shell'
// import path from 'path'
import scan from '../simulation/flow'

export const test = win => {
  win.webContents.send('ask-for-test')
}

ipcMain.on('response-for-test', (event, currentFile) => {
  const win = BrowserWindow.fromWebContents(event.sender)

  scan(currentFile, 1, win)
})
