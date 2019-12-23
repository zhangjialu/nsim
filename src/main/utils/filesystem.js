import fse from 'fs-extra'
import fs from 'fs'
import path from 'path'

export const writeFile = (pathName, content, extension) => {
  if (!pathName) {
    const errMsg = '[ERROR] Cannot save file without path.'
    return Promise.reject(errMsg)
  }
  pathName =
    !extension || pathName.endsWith(extension)
      ? pathName
      : `${pathName}${extension}`

  return fse.outputFile(pathName, content, 'utf-8')
}

export const readFile = pathName => {
  const isJSON = path.extname(pathName) === '.json'
  const content = fs.readFileSync(pathName).toString()
  const data = isJSON ? JSON.parse(content) : content
  return data
}
