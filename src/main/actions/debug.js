import { ipcMain, BrowserWindow } from 'electron'
import scan from '../simulation'

let timerId = null
let time = 0

export const simulate = win => {
  win.webContents.send('ask-for-run-simulate')
}

export const oneStepSimulate = win => {
  win.webContents.send('ask-for-run-one-step-simulate')
}

export const stopSimulation = () => {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
    time = 0
    console.log('stop simulation')
  }
}

ipcMain.on('response-for-run-one-step-simulate', (event, currentFile) => {
  if (!currentFile) return
  time += 1
  console.log('one-step-simulate: ' + time)
  const win = BrowserWindow.fromWebContents(event.sender)
  const simulateResults = scan(currentFile, time)
  win.webContents.send('set-simulate-results', simulateResults)
})

ipcMain.on('response-for-run-simulate', (event, currentFile) => {
  console.log('start simulation')
  if (!currentFile) {
    stopSimulation()
    return
  }
  time += 1
  const win = BrowserWindow.fromWebContents(event.sender)
  const simulateResults = scan(currentFile, time)
  win.webContents.send('set-simulate-results', simulateResults)
  if (!timerId) {
    timerId = setInterval(() => {
      win.webContents.send('ask-for-run-simulate')
    }, 500)
  }
})
