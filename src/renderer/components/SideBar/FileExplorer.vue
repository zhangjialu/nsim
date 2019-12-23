<template>
  <div class="file-explorer">
    <!-- 打开的文件 -->
    <div class="opened-files">
      <tree-view :treeData="openedFiles"></tree-view>
    </div>
    <!-- 打开的文件夹 -->
    <div class="opened-folder">
      <tree-view :treeData="openedFolder"></tree-view>
      <div v-if="openedFolder.fileName === '无打开的文件夹'"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TreeView from '../TreeView'

export default {
  name: 'FileExplorer',
  components: {
    TreeView
  },
  computed: {
    ...mapState({
      openedFolder: state => state.editor.openedFolder,
      tabs: state => state.editor.tabs
    }),
    openedFiles() {
      return {
        fileName: this.tabs.length > 0 ? '打开的文件' : '无打开的文件',
        pathName: '',
        children: this.tabs
      }
    }
  },
  methods: {
    openFolder() {
      this.$store.dispatch('ASK_FOR_OPEN_PROJECT')
    }
  }
}
</script>

<style lang="scss" scoped>
.file-explorer {
  padding: 0 0.5em;
}
</style>
