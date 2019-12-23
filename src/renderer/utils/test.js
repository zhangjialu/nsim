import path from 'path'

const findFile = (folderPath, filePath) => {
  return path
    .relative(folderPath, filePath)
    .split(path.sep)
    .reduce((acc, next) => {
      return acc.children[
        acc.children.findIndex(file => file.fileName === next)
      ]
    }, state.openedFolder)
}
