import { ipcRenderer } from 'electron'
import bus from '../bus'
import path from 'path'
import { getBlankFileState } from './help'

const state = {
  openedFolder: {
    fileName: '无打开的文件夹',
    pathName: '',
    children: []
  },
  currentFile: null,
  tabs: [],
  selectedModule: null
}

const mutations = {
  SET_CURRENT_FILE(state, currentFile) {
    // state.currentFile = currentFile
    const oldCurrentFile = state.currentFile
    if (!oldCurrentFile || oldCurrentFile.data !== currentFile.data) {
      state.currentFile = currentFile
    }
    state.tabs[
      state.tabs.findIndex(tab => tab.id === currentFile.id)
    ] = currentFile

    if (
      state.openedFolder.fileName !== '无打开的文件夹' &&
      currentFile.pathName !== ''
    ) {
      const relativePath = path
        .relative(state.openedFolder.pathName, currentFile.pathName)
        .split(path.sep)

      const newOpenedFolder = { ...state.openedFolder }
      relativePath.reduce((acc, next, index) => {
        const i = acc.children.findIndex(file => file.fileName === next)
        if (index === relativePath.length - 1) {
          acc.children[i] = currentFile
        }
        return acc.children[i]
      }, newOpenedFolder)
      // console.log(newOpenedFolder)
      state.openedFolder = newOpenedFolder
    }
  },
  SET_OPENED_FOLDER: (state, openedFolder) => {
    state.openedFolder = openedFolder
  },
  ADD_FILE_TO_TABS(state, currentFile) {
    state.tabs.push(currentFile)
  },
  REMOVE_FILE_WITHIN_TABS(state, file) {
    const { tabs, currentFile } = state
    const index = tabs.indexOf(file)
    state.tabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)]
    if (file === currentFile) {
      const fileState = state.tabs[index] || state.tabs[index - 1] || null
      state.currentFile = fileState
    }
  },
  SET_SELECTED_MODULE(state, selectedModule) {
    state.selectedModule = selectedModule
    bus.$emit('set-selected-module')
  }
  // SET_PATHNAME(state, file) {
  //   const { id, fileName, pathName } = file
  //   const targetFileIndex = state.tabs.findIndex(f => f.id === id)
  //   state.tabs[targetFileIndex] = {
  //     ...state.tabs[targetFileIndex],
  //     fileName,
  //     pathName
  //   }
  //   console.log(state.tabs[targetFileIndex])
  // state.tabs = [
  //   ...state.tabs.slice(0, targetFileIndex),
  //   {
  //     ...state.tabs[targetFileIndex],
  //     filename,
  //     pathname
  //   },
  //   ...state.tabs.slice(targetFileIndex + 1)
  // ]
  // }
}

const actions = {
  UPDATE_CURRENT_FILE({ commit, state }, currentFile) {
    commit('SET_CURRENT_FILE', currentFile)
    bus.$emit('current-file-updated')
    // 更新属性栏视图
    // const oldSelectedModule = state.selectedModule
    // commit('SET_SELECTED_MODULE', null)
    // commit('SET_SELECTED_MODULE', state.selectedModule)

    if (!state.tabs.some(f => f.id === currentFile.id)) {
      commit('ADD_FILE_TO_TABS', currentFile)
    }
  },
  UPDATE_SELECTED_MODULE({ state, commit, dispatch }, selectedModule) {
    commit('SET_SELECTED_MODULE', selectedModule)
    // const oldSelectedModule = state.selectedModule
    if (selectedModule !== null) {
      const { modules } = state.currentFile.data
      const index = modules.findIndex(module => module.id === selectedModule.id)
      dispatch('UPDATE_CURRENT_FILE', {
        ...state.currentFile,
        data: {
          ...state.currentFile.data,
          modules: [
            ...state.currentFile.data.modules.slice(0, index),
            selectedModule,
            ...state.currentFile.data.modules.slice(index + 1)
          ]
        }
      })
    }
  },
  REMOVE_FILE_IN_TABS({ commit }, file) {
    commit('REMOVE_FILE_WITHIN_TABS', file)
  },
  LISTEN_FOR_OPEN_FILE: ({ commit, state }) => {
    ipcRenderer.on('file-opened', (event, file) => {
      const index = state.tabs.findIndex(f => f.pathName === file.pathName)
      if (index !== -1) {
        file = state.tabs[index]
      }
      if (!state.tabs.some(f => f.id === file.id)) {
        commit('ADD_FILE_TO_TABS', file)
      }
      commit('SET_CURRENT_FILE', file)
      bus.$emit('SIDEBAR::go-tab', file.id)
    })
  },
  LISTEN_FOR_OPEN_FOLDER: ({ commit }) => {
    ipcRenderer.on('folder-opened', (event, dirPath, content) => {
      commit('SET_OPENED_FOLDER', content)
    })
  },
  // need pass some data to main process when `save` menu item clicked
  LISTEN_FOR_SAVE({ state }) {
    ipcRenderer.on('AGANI::ask-file-save', () => {
      ipcRenderer.send('AGANI::response-file-save', state.currentFile)
    })
  },
  LISTEN_FOR_NEW_FILE({ state, dispatch }) {
    ipcRenderer.on('AGANI::new-file', (e, id) => {
      dispatch('UPDATE_CURRENT_FILE', getBlankFileState(state.tabs, id))
    })
  },
  LISTEN_FOR_SET_PATHNAME({ dispatch }) {
    ipcRenderer.on('AGANI::set-pathname', (e, file) => {
      // dispatch('SET_PATHNAME', file)
      dispatch('UPDATE_CURRENT_FILE', file)
    })
  },
  LISTEN_FOR_RUN_SIMULATE({ state }) {
    ipcRenderer.on('ask-for-run-simulate', () => {
      ipcRenderer.send('response-for-run-simulate', state.currentFile)
    })
  },
  LISTEN_FOR_RUN_ONE_STEP_SIMULATE({ state }) {
    ipcRenderer.on('ask-for-run-one-step-simulate', () => {
      ipcRenderer.send('response-for-run-one-step-simulate', state.currentFile)
    })
  },
  LISTEN_FOR_SIMULATE_RESULTS({ dispatch }) {
    ipcRenderer.on('set-simulate-results', (e, simulateResults) => {
      dispatch('UPDATE_CURRENT_FILE', simulateResults)
    })
  },
  LISTEN_FOR_TEST({ state }) {
    ipcRenderer.on('ask-for-test', () => {
      ipcRenderer.send('response-for-test', state.currentFile)
    })
  }
  // SET_PATHNAME({ dispatch }, file) {
  //   dispatch('UPDATE_CURRENT_FILE', file)
  // }
}

export default {
  state,
  mutations,
  actions
}
