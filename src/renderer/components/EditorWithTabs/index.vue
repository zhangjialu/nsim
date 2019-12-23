<template>
  <div class="editor-with-tabs">
    <tabs></tabs>
    <editor
      v-if="currentFile"
      v-for="file in tabs"
      :key="file.id"
      :file="file"
      v-show="currentFile.id === file.id"
    ></editor>
    <default-page v-if="tabs.length === 0"></default-page>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tabs from './Tabs'
import Editor from './Editor'
import DefaultPage from './DefaultPage'

export default {
  name: 'EditorWithTabs',
  components: {
    Tabs,
    Editor,
    DefaultPage
  },
  computed: {
    ...mapState({
      currentFile: state => state.editor.currentFile,
      tabs: state => state.editor.tabs,
      diagramWidth: state => state.main.diagramWidth,
      diagramHeight: state => state.main.diagramHeight
    })
  }
}
</script>

<style lang="scss" scoped>
.editor-with-tabs {
  flex: 1 1;
  height: calc(100vh - var(--status-bar-height));
  background: #eee;
  display: flex;
  flex-direction: column;
}
</style>
