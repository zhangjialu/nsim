<template>
  <div class="file" :class="active" ref="file" @click="onClick()">
    <!-- 这里可以添加文件图标 -->
    <input
      type="text"
      @click.stop="noop"
      class="rename"
      v-if="renameCache === file.pathname"
      v-model="newName"
      ref="renameInput"
      @keydown.enter="rename"
    >
    <span v-else>{{ file.name }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { showContextMenu } from '../../contextMenu/sideBar'

export default {
  name: 'File',
  props: {
    file: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newName: ''
    }
  },
  created() {
    this.$nextTick(() => {
      this.$refs.file.addEventListener('contextmenu', event => {
        event.preventDefault()
        this.$store.dispatch('CHANGE_ACTIVE_ITEM', this.file)
        showContextMenu(event, !!this.clipboard)
      })

      bus.$on('SIDEBAR::show-rename-input', this.focusRenameInput)
    })
  },
  computed: {
    ...mapState({
      clipboard: state => state.main.clipboard
    })
  },
  methods: {
    noop() {},
    onClick() {
      // this.$store.dispatch('UPDATE_CURRENT_FILE', fileState)
    },
    focusRenameInput() {
      this.$nextTick(() => {
        if (this.$refs.renameInput) {
          this.$refs.renameInput.focus()
          this.newName = this.file.name
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
</style>
