<template>
  <li class="tree-view-item">
    <div
      class="item-name"
      :class="{active: currentFile && model.id === currentFile.id}"
      @click.stop="onClick({id: model.id, fileName: model.fileName, pathName: model.pathName, data: model.data})"
      @contextmenu="onRightClick"
    >
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
      <!-- 这里可以添加图标 -->
      <input
        type="text"
        @click.stop="noop"
        class="rename"
        v-if="renameCache === model.pathName"
        v-model="newName"
        ref="renameInput"
        @keydown.enter="rename"
      >
      <span v-else>{{ model.fileName }}</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree-view-item
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      ></tree-view-item>
    </ul>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import bus from '../../bus'
import { showContextMenu } from '../../contextMenu/sideBar'

export default {
  name: 'TreeViewItem',
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      open: false,
      newName: ''
    }
  },
  created() {
    bus.$on('SIDEBAR::show-rename-input', this.focusRenameInput)
  },
  computed: {
    ...mapState({
      renameCache: state => state.project.renameCache,
      clipboard: state => state.project.clipboard,
      currentFile: state => state.editor.currentFile,
      tabs: state => state.editor.tabs
    }),
    isFolder() {
      return this.model.children
    }
  },
  methods: {
    noop() {},
    onClick(file) {
      if (this.isFolder) {
        this.open = !this.open
      } else {
        const index = this.tabs.findIndex(f => f.pathName === file.pathName)
        if (index !== -1) {
          file = this.tabs[index]
        }
        const isOpened = this.tabs.some(f => f.id === file.id)
        if (!isOpened || file.id !== this.currentFile.id || index !== -1) {
          this.$store.dispatch('UPDATE_CURRENT_FILE', file)
        }
        bus.$emit('SIDEBAR::go-tab', file.id)
      }
    },
    onRightClick(event) {
      this.$store.dispatch('CHANGE_ACTIVE_ITEM', this.model)
      showContextMenu(event, !!this.clipboard)
    },
    focusRenameInput() {
      this.$nextTick(() => {
        if (this.$refs.renameInput) {
          this.$refs.renameInput.focus()
          this.newName = this.model.fileName
        }
      })
    },
    rename() {
      // if (this.newName) {
      //   this.$store.dispatch('RENAME_IN_SIDEBAR', newName)
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-view-item {
  white-space: nowrap;
  cursor: pointer;

  .item-name {
    &:hover {
      font-weight: bold;
    }
    &.active {
      color: #80cbc4;
    }
  }

  ul {
    /* font-size: 10px; */
    padding-left: 1em;
    margin: 0.5em 0;
    line-height: 1.5em;
    list-style-type: none;
  }
}
</style>
