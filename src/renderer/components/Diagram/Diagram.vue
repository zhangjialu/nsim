<template>
  <div
    class="diagram"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    :style="diagramStyle"
  >
    <div
      ref="paper"
      class="paper"
      :class="{'grid': file.data.paper.showGrid}"
      :style="paperStyle"
      @click="onClick"
      @dblclick="onDoubleClick"
      @dragenter.prevent="onDragEnter"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
    >
      <module-template
        v-for="module in file.data.modules"
        :key="module.id"
        :module="module"
        :jsp="jsp"
      ></module-template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ModuleTemplate from '../modules/ModuleTemplate'
import { getJspInstance } from '../../utils/jsplumb'
import bus from '../../bus'

export default {
  name: 'Diagram',
  components: {
    ModuleTemplate
  },
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      jsp: getJspInstance(),
      mouseDown: false,
      clicked: {}
    }
  },
  created() {
    bus.$on('reconnect-module', this.reconnectModule)
    bus.$on('remove-module', moduleId => this.removeConn(moduleId))
  },
  mounted() {
    this.jsp.draggable(this.$refs.paper.querySelectorAll('.module'))
    bus.$emit('diagram-mounted')
    this.connectModule()
    // console.log('mounted')
    this.setConnectorColor()
  },
  updated() {
    if (this.currentFile.id === this.file.id) {
      this.jsp.draggable(this.$refs.paper.querySelectorAll('.module'))
      this.setConnectorColor()
    }
  },
  computed: {
    ...mapState({
      isShowPropsBar: state => state.main.isShowPropsBar,
      currentFile: state => state.editor.currentFile,
      modules: state => state.main.modules,
      selectedModule: state => state.editor.selectedModule,
      diagramWidth: state => state.main.diagramWidth,
      diagramHeight: state => state.main.diagramHeight
    }),
    diagramStyle() {
      return {
        width: this.diagramWidth + 'px',
        height: this.diagramHeight + 'px'
      }
    },
    paperStyle() {
      const { width, height } = this.file.data.paper
      return { width: width + 'px', height: height + 'px' }
    }
  },
  methods: {
    onClick(e) {
      // if (e.target.classList.contains('paper')) {
      //   this.$store.commit('SET_SELECTED_MODULE', null)
      // }
    },
    onDoubleClick(e) {
      if (!this.isShowPropsBar) {
        this.$store.commit('SHOW_PROPS_BAR')
      }
    },
    onMouseDown(e) {
      if (e.target.classList.contains('paper')) {
        this.mouseDown = true
        this.$refs.paper.style.cursor = '-webkit-grabbing'
        this.$store.commit('SET_SELECTED_MODULE', null)
        this.clicked = {
          x: e.clientX,
          y: e.clientY
        }
      }
    },
    onMouseMove(e) {
      if (this.mouseDown) {
        const scrollLeft = e.clientX - this.clicked.x
        const scrollTop = e.clientY - this.clicked.y
        bus.$emit('paper-moved', scrollLeft, scrollTop)
        this.clicked = {
          x: e.clientX,
          y: e.clientY
        }
      }
    },
    onMouseUp(e) {
      this.mouseDown = false
      // this.$refs.paper.style.cursor = '-webkit-grab'
      this.$refs.paper.style.cursor = 'default'
    },
    onDragEnter(e) {
      return false
    },
    onDragOver(e) {
      return false
    },
    onDragLeave(e) {},
    // roundPosition(num) {
    //   let result = Math.round(num)
    //   const mod = result % 5
    //   result = result + 5 - mod
    //   return result
    // },
    onDrop(e) {
      const index = parseInt(e.dataTransfer.getData('index'))
      const offsetX = e.dataTransfer.getData('offsetX')
      const offsetY = e.dataTransfer.getData('offsetY')
      // console.log(e.dataTransfer.getData('index'))
      // console.log(this.modules[index])
      const module = {
        ...this.modules[index],
        id: Date.now().toString(),
        params: this.modules[index].params.map(param => ({
          name: param,
          value: '',
          history: []
        })),
        location: {
          x: e.offsetX - offsetX,
          y: e.offsetY - offsetY
        }
      }
      this.$store.dispatch('UPDATE_CURRENT_FILE', {
        ...this.file,
        data: {
          ...this.file.data,
          modules: [...this.file.data.modules, module]
        }
      })
    },
    connectModule() {
      this.file.data.connectInfo.forEach(connect => {
        this.jsp.connect({
          source: connect.source.moduleId,
          target: connect.target.moduleId,
          anchors: [connect.source.anchor, connect.target.anchor]
        })
      })
    },
    setConnectorColor() {
      this.jsp.select().each(connector => {
        // console.log(connector);
        const connValue = this.currentFile.data.connectInfo.filter(
          conn => conn.source.moduleId === connector.endpoints[0].elementId
        )[0].value
        // console.log(connValue);
        if (typeof connValue === 'number') {
          if (connValue === 0) {
            connector.setPaintStyle({ stroke: '#69f0ae' })
          }
          if (connValue === 1) {
            connector.setPaintStyle({ stroke: '#ff6e40' })
          }
        }
      })
    },
    removeConn(moduleId) {
      const sourceConn = this.jsp.select({ source: moduleId })
      const targetConn = this.jsp.select({ target: moduleId })
      sourceConn.delete()
      targetConn.delete()
    },
    reconnectModule() {
      this.removeConn(this.selectedModule.id)
      // console.log('reconnectModule')
      this.currentFile.data.connectInfo
        .filter(
          conn =>
            conn.source.moduleId === this.selectedModule.id ||
            conn.target.moduleId === this.selectedModule.id
        )
        .forEach(conn => {
          this.jsp.connect({
            source: conn.source.moduleId,
            target: conn.target.moduleId,
            anchors: [conn.source.anchor, conn.target.anchor]
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.diagram {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.paper {
  position: relative;
  background-color: #fff;
  /* cursor: -webkit-grab; */
}

.grid {
  background-image: linear-gradient(to right, #eee 1px, transparent 1px),
    linear-gradient(to bottom, #eee 1px, transparent 1px);
  // background-image: radial-gradient(circle, #ccc 1px, rgba(0, 0, 0, 0) 1px);
  background-size: 10px 10px;
}
</style>
