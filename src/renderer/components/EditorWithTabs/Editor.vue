<template>
  <div class="editor" ref="editor">
    <diagram :file="file"></diagram>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Diagram from '../Diagram/Diagram'
import bus from '../../bus'

export default {
  name: 'Editor',
  components: {
    Diagram
  },
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  created() {
    bus.$on('paper-moved', (scrollLeft, scrollTop) => {
      this.$refs.editor.scrollLeft -= scrollLeft
      this.$refs.editor.scrollTop -= scrollTop
    })
  },
  mounted() {
    this.scrollToView()
  },
  computed: {
    ...mapState({
      currentFile: state => state.editor.currentFile,
      tabs: state => state.editor.tabs,
      diagramWidth: state => state.main.diagramWidth,
      diagramHeight: state => state.main.diagramHeight
    })
  },
  methods: {
    scrollToView() {
      // console.log('scrollToView', this.$refs.editor)
      const { width, height } = this.currentFile.data.paper
      this.$refs.editor.scrollTop = this.diagramHeight / 2 - height / 2
      this.$refs.editor.scrollLeft = this.diagramWidth / 2 - width / 2
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  /* width: 100%; */
  height: calc(100vh - var(--tabs-bar-height));
  /* background: var(--bg-light); */
  /* background: #ccc; */
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;

    &:hover {
      background: rgba(128, 203, 195, 0.4);
    }

    &:active {
      background: rgba(128, 203, 195, 0.5);
    }
  }
}
</style>
