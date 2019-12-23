import { app, BrowserWindow, dialog, ipcMain } from 'electron'
import fs from 'fs'
import path from 'path'
import createWindow from '../window'
import { getUniqueId } from '../utils'
import { writeFile, readFile } from '../utils/filesystem'

export const newFile = win => {
  win.webContents.send('AGANI::new-file', getUniqueId())
}

export const newWindow = createWindow

export const openFile = targetWindow => {
  const files = dialog.showOpenDialog(targetWindow, {
    properties: ['openFile'],
    filters: [{ name: 'JSON Files', extensions: ['json'] }]
  })
  if (!files) {
    return
  }
  const filePath = files[0]
  targetWindow.webContents.send('file-opened', {
    id: getUniqueId(),
    fileName: path.basename(filePath),
    pathName: filePath,
    data: readFile(filePath)
  })
}

const traverse = dirPath => {
  let results = {
    id: getUniqueId(),
    pathName: dirPath,
    fileName: path.basename(dirPath),
    children: []
  }
  const list = fs.readdirSync(dirPath)
  list.forEach(file => {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results.children.push(traverse(filePath))
    } else {
      if (path.extname(file) === '.json') {
        results.children.push({
          id: getUniqueId(),
          pathName: filePath,
          fileName: file,
          data: readFile(filePath)
        })
      }
    }
  })

  return results
}

export const openFolder = targetWindow => {
  const dir = dialog.showOpenDialog(targetWindow, {
    properties: ['openDirectory', 'createDirectory']
  })
  if (!dir) {
    return
  }
  const dirPath = dir[0]
  const content = traverse(dirPath)
  // console.log(JSON.stringify(content))
  targetWindow.webContents.send('folder-opened', dirPath, content)
}

export const save = win => {
  win.webContents.send('AGANI::ask-file-save')
}

export const handleResponseForSave = (
  event,
  { id, fileName, pathName, data }
) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  if (pathName === '') {
    pathName = dialog.showSaveDialog(win, {
      title: '保存',
      defaultPath: path.join(app.getPath('documents'), fileName),
      filters: [{ name: 'JSON Files', extensions: ['json'] }]
    })
  }
  if (pathName && typeof pathName === 'string') {
    writeFile(pathName, JSON.stringify(data), '.json')
      .then(() => {
        const fileName = path.basename(pathName)
        win.webContents.send('AGANI::set-pathname', {
          id,
          pathName,
          fileName,
          data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

ipcMain.on('ask-for-new-file', e => {
  const win = BrowserWindow.fromWebContents(e.sender)
  newFile(win)
})

ipcMain.on('ask-for-open-file', e => {
  const win = BrowserWindow.fromWebContents(e.sender)
  openFile(win)
})

ipcMain.on('ask-for-open-folder', e => {
  const win = BrowserWindow.fromWebContents(e.sender)
  openFolder(win)
})

ipcMain.on('AGANI::response-file-save', handleResponseForSave)

// ipcMain.on('AGANI::save-all', (e, unSavedFiles) => {
//   Promise.all(unSavedFiles.map(file => handleResponseForSave(e, file)))
// })
