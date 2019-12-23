<template>
  <div class="editor-tabs" ref="editorTabs" @mousewheel.prevent="onWheel">
    <!-- <ul class="tabs-container" :style="{left: tabsContainerLeft + 'px'}"> -->
    <ul class="tabs-container">
      <li
        class="tabs-item"
        :style="{width: tabItemWidth + 'px'}"
        v-for="file in tabs"
        :key="file.id"
        :class="{ active: currentFile.id === file.id }"
        @click="selectFile(file)"
      >
        <span class="item-name">{{file.fileName}}</span>
        <div class="close-btn">
          <close-icon :clicked="() => removeFileInTab(file)"></close-icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { CloseIcon, PlusIcon } from '../icons'
import bus from '../../bus'

export default {
  name: 'Tabs',
  components: {
    CloseIcon,
    PlusIcon
  },
  data() {
    return {
      tabItemWidth: 180,
      tabsContainerLeft: 0
    }
  },
  created() {
    this.$nextTick(() => {
      bus.$on('SIDEBAR::go-tab', this.goTab)
    })
  },
  computed: {
    ...mapState({
      currentFile: state => state.editor.currentFile,
      tabs: state => state.editor.tabs
    })
  },
  watch: {
    tabsContainerLeft() {
      this.$refs.editorTabs.scrollLeft = this.tabsContainerLeft
    }
  },
  methods: {
    onWheel(event) {
      //设置鼠标滚轮滚动时屏幕滚动条的移动步长
      var step = 50
      if (event.deltaY < 0) {
        //向上滚动鼠标滚轮，屏幕滚动条左移
        this.$refs.editorTabs.scrollLeft -= step
      } else {
        //向下滚动鼠标滚轮，屏幕滚动条右移
        this.$refs.editorTabs.scrollLeft += step
      }
    },
    selectFile(file) {
      if (file.id !== this.currentFile.id) {
        this.$store.dispatch('UPDATE_CURRENT_FILE', file)
      }

      this.goTab(file.id)
    },
    removeFileInTab(file) {
      this.$store.dispatch('REMOVE_FILE_IN_TABS', file)
      this.$nextTick(() => {
        const editorTabsWidth = this.$refs.editorTabs.offsetWidth
        const tabsContainerWidth = this.tabs.length * this.tabItemWidth
        if (tabsContainerWidth > editorTabsWidth) {
          this.tabsContainerLeft += this.tabItemWidth
        } else {
          this.tabsContainerLeft = 0
        }
      })
      // const { isSaved } = file
      // if (isSaved) {
      //   this.$store.dispatch('REMOVE_FILE_IN_TABS', file)
      // } else {
      //   this.$store.dispatch('CLOSE_SINGLE_FILE', file)
      // }
    },
    goTab(id) {
      this.$nextTick(() => {
        const editorTabsWidth = this.$refs.editorTabs.offsetWidth
        const index = this.tabs.findIndex(tab => tab.id === id)
        const position = index * this.tabItemWidth
        const left = this.tabsContainerLeft
        const right = left + editorTabsWidth

        if (position < left) {
          this.tabsContainerLeft = position
        }
        if (position + this.tabItemWidth > right) {
          this.tabsContainerLeft += position + this.tabItemWidth - right
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-tabs {
  position: relative;
  flex: 0 0 var(--tabs-bar-height);
  padding: 0;
  margin: 0;
  background: var(--bg-light);
  user-select: none;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* &::-webkit-scrollbar-track {
    background: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background: #999;
  } */

  .tabs-container {
    position: absolute;
    height: var(--tabs-bar-height);
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .tabs-item {
    line-height: var(--tabs-bar-height);
    height: var(--tabs-bar-height);
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    /* border: 1px solid #ccc;
    border-radius: 5px; */
    padding: 0 0.3em;
    display: flex;
    justify-content: space-between;

    /* .item-name {
      flex: 0 0 80%;
      overflow: hidden;
    } */

    .close-btn {
      padding: 0.15em;
    }

    &.active {
      /* border-bottom: 2px solid #4db6ac; */
      border-bottom: 2px solid #80cbc4;
      /* border-bottom: 2px solid #78909c; */
      /* border-bottom: 2px solid #ff8a65; */
    }
  }
}
</style>
