import Vue from 'vue'
import Vuex from 'vuex'

import main from './main'
import project from './project'
import editor from './editor'
import layout from './layout'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    project,
    editor,
    layout
  }
})
