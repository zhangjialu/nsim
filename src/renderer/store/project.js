import bus from '../bus'
import { ipcRenderer } from 'electron'

const state = {
  activeItem: {},
  createCache: {}, // Use to cache newly created filename, for open iimmediately.
  renameCache: null,
  clipboard: null
}

const mutations = {
  SET_ACTIVE_ITEM(state, activeItem) {
    state.activeItem = activeItem
  },
  SET_RENAME_CACHE(state, cache) {
    state.renameCache = cache
  },
  CREATE_PATH(state, cache) {
    state.createCache = cache
  }
}

const actions = {
  LISTEN_FOR_SIDEBAR_CONTEXT_MENU({ commit, state }) {
    // bus.$on('SIDEBAR::show-in-folder', () => {
    //   const { pathname } = state.activeItem
    //   shell.showItemInFolder(pathname)
    // })
    // bus.$on('SIDEBAR::new', type => {
    //   const { pathname, isDirectory } = state.activeItem
    //   const dirname = isDirectory ? pathname : path.dirname(pathname)
    //   commit('CREATE_PATH', { dirname, type })
    //   bus.$emit('SIDEBAR::show-new-input')
    // })
    // bus.$on('SIDEBAR::remove', () => {
    //   const { pathname } = state.activeItem
    //   shell.moveItemToTrash(pathname)
    // })
    // bus.$on('SIDEBAR::copy-cut', type => {
    //   const { pathname: src } = state.activeItem
    //   commit('SET_CLIPBOARD', { type, src })
    // })
    // bus.$on('SIDEBAR::paste', () => {
    //   const { clipboard } = state
    //   const { pathname, isDirectory } = state.activeItem
    //   const dirname = isDirectory ? pathname : path.dirname(pathname)
    //   if (clipboard) {
    //     clipboard.dest = dirname + '/' + path.basename(clipboard.src)
    //     paste(clipboard)
    //       .then(() => {
    //         commit('SET_CLIPBOARD', null)
    //       })
    //       .catch(err => {
    //         notice.notify({
    //           title: 'Paste Error',
    //           type: 'error',
    //           message: err.message
    //         })
    //       })
    //   }
    // })
    bus.$on('SIDEBAR::rename', () => {
      commit('SET_RENAME_CACHE', state.activeItem.pathName)
      bus.$emit('SIDEBAR::show-rename-input')
    })
  },
  CHANGE_ACTIVE_ITEM({ commit }, activeItem) {
    commit('SET_ACTIVE_ITEM', activeItem)
  },
  // RENAME_IN_SIDEBAR ({ commit, state }, name) {
  //   const src = state.renameCache
  //   const dirname = path.dirname(src)
  //   const dest = dirname + '/' + name
  //   rename(src, dest)
  //     .then(() => {
  //       commit('RENAME_IF_NEEDED', { src, dest })
  //     })
  // },
  ASK_FOR_NEW_FILE() {
    ipcRenderer.send('ask-for-new-file')
  },
  ASK_FOR_OPEN_FILE() {
    ipcRenderer.send('ask-for-open-file')
  },
  ASK_FOR_OPEN_FOLDER() {
    ipcRenderer.send('ask-for-open-folder')
  }
}

export default {
  state,
  mutations,
  actions
}
