<template>
  <div class="side-bar" v-show="isShowSideBar" @click="onClick">
    <div class="header">{{sideBarTitle}}</div>
    <div class="body">
      <file-explorer v-show="sideBarTitle === '查看文件'"></file-explorer>
      <module-explorer v-show="sideBarTitle === '查看模块'"></module-explorer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ipcRenderer } from 'electron'
import FileExplorer from './FileExplorer'
import ModuleExplorer from './ModuleExpolorer'

export default {
  name: 'SideBar',
  components: {
    FileExplorer,
    ModuleExplorer
  },
  computed: {
    ...mapState({
      isShowSideBar: state => state.main.isShowSideBar,
      sideBarTitle: state => state.main.sideBarTitle
    })
  },
  methods: {
    onClick(event) {
      console.log('hide rename or create input if needed')
      // hide rename or create input if needed
      // const target = event.target
      // if (target.tagName !== 'INPUT') {
      //   this.$store.dispatch('CHANGE_ACTIVE_ITEM', {})
      //   this.$store.commit('CREATE_PATH', {})
      //   this.$store.commit('SET_RENAME_CACHE', null)
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  flex: 0 0 var(--side-bar-width);
  /* width: 20rem; */
  height: calc(100vh - var(--status-bar-height));
  /* border-right: 1px solid #eee; */
  background: #fff;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(238, 238, 238, 0.5);
  }

  .header {
    height: var(--tabs-bar-height);
    padding: 0.5em;
    /* border-bottom: 1px solid #eee; */
    font-weight: bold;
  }
}
</style>
