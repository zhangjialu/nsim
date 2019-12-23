const defaultFileState = {
  fileName: '',
  pathName: '',
  data: {
    modules: [],
    connectInfo: [],
    paper: {
      size: 'A3',
      direction: 'landscape',
      width: 1587.6,
      height: 1122.6599999999999,
      showGrid: false
    }
  }
}

export const getBlankFileState = (tabs, id) => {
  const fileState = JSON.parse(JSON.stringify(defaultFileState))
  let untitleId = Math.max(
    ...tabs.map(f => {
      if (f.pathName === '') {
        return +f.fileName.split('-')[1]
      } else {
        return 0
      }
    }),
    0
  )

  return {
    ...fileState,
    id,
    fileName: `Untitled-${++untitleId}`
  }
}

const ID_PREFEX = 'nsim-module-'
let id = 0

export const getUniqueId = () => {
  return `${ID_PREFEX}${id++}`
}
