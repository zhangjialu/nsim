<template>
  <div
    :id="module.id"
    class="module"
    :class="{'selected': isSelected}"
    ref="module"
    @dblclick="onDoubleClick"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @contextmenu.prevent="onRightClick"
    :style="{
      width: module.image.width + 'px',
      height: module.image.height + 'px',
      top: module.location.y + 'px', 
      left: module.location.x + 'px'}"
  >
    <img :src="module.image.dataUrl" :alt="module.name" :style="imgStyle">
    <div v-if="module.description.data" class="description" :style="descStyle">
      <span ref="descData">{{module.description.data}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bus from '../../bus'
import { showContextMenu } from '../../contextMenu/module'

export default {
  props: {
    module: {
      type: Object,
      required: true
    },
    jsp: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMuseDown: false,
      isMoved: false,
      descDataWidth: 0
    }
  },
  created() {
    bus.$on('rotate-module', () => {
      if (this.module.id === this.selectedModule.id) {
        this.changeEndpoint()
      }
    })
  },
  mounted() {
    this.addEndpoint(this.module)
    if (this.module.description.data) {
      this.descDataWidth = getComputedStyle(this.$refs.descData).width
    }
  },
  updated() {
    this.$nextTick(() => {
      if (this.module.description.data) {
        this.descDataWidth = getComputedStyle(this.$refs.descData).width
      }
    })
  },
  computed: {
    ...mapState({
      isShowPropsBar: state => state.main.isShowPropsBar,
      selectedModule: state => state.editor.selectedModule,
      currentFile: state => state.editor.currentFile
    }),
    isSelected() {
      return this.selectedModule && this.selectedModule.id === this.module.id
    },
    imgStyle() {
      return {
        transform: `rotate(${this.module.image.rotateAngle}deg)`
      }
    },
    descStyle() {
      const { data, direction } = this.module.description
      const dirStyle = {
        top: {
          left: '50%',
          top: 0,
          transform: `translate(-50%, -100%)`,
          textAlign: parseFloat(this.descDataWidth) < 160 ? 'center' : 'left'
        },
        left: {
          top: '50%',
          right: '100%',
          transform: `translate(0, -50%)`,
          textAlign: parseFloat(this.descDataWidth) < 160 ? 'right' : 'left'
        },
        right: {
          top: '50%',
          left: '100%',
          transform: `translate(0, -50%)`,
          textAlign: 'left'
        },
        bottom: {
          left: '50%',
          transform: `translate(-50%, 0)`,
          textAlign: parseFloat(this.descDataWidth) < 160 ? 'center' : 'left'
        }
      }
      return dirStyle[direction]
    }
  },
  methods: {
    onDoubleClick() {
      // console.log('onDoubleClick')
      if (!this.isShowPropsBar) {
        this.$store.commit('SHOW_PROPS_BAR')
      }
    },
    onMouseDown() {
      // console.log('onMouseDown')
      this.isMuseDown = true
      if (!this.selectedModule || this.selectedModule.id !== this.module.id) {
        const selectedModule = this.currentFile.data.modules.filter(
          module => module.id === this.module.id
        )[0]
        this.$store.commit('SET_SELECTED_MODULE', selectedModule)
      }
    },
    onMouseMove() {
      // console.log('onMouseMove')
      if (this.isMuseDown) {
        this.isMoved = true
      }
    },
    // roundPosition(num) {
    //   let result = Math.round(num)
    //   const mod = result % 5
    //   result = result + 5 - mod
    //   return result
    // },
    onMouseUp() {
      // console.log('onMouseUp')
      if (this.isMoved) {
        this.isMoved = false
        this.isMuseDown = false
        const location = {
          x: parseInt(this.$refs.module.style.left),
          y: parseInt(this.$refs.module.style.top)
        }
        if (
          this.selectedModule.location.x !== location.x ||
          this.selectedModule.location.y !== location.y
        ) {
          this.$store.dispatch('UPDATE_SELECTED_MODULE', {
            ...this.selectedModule,
            location
          })
        }
      }
    },
    onRightClick(e) {
      showContextMenu(e)
    },
    addEndpoint(module) {
      module.inputPorts.forEach(port => {
        this.jsp.addEndpoint(module.id, {
          anchor: port.anchor,
          isTarget: true,
          connectionsDetachable: true,
          maxConnections: -1
        })
      })
      module.outputPorts.forEach(port => {
        this.jsp.addEndpoint(module.id, {
          anchor: port.anchor,
          isSource: true,
          connectionsDetachable: false,
          maxConnections: -1
        })
      })
    },
    changeEndpoint() {
      console.log('changeEndpoint')
      const sourceEndpoints = this.jsp.selectEndpoints({
        source: this.selectedModule.id
      })
      const targetEndpoints = this.jsp.selectEndpoints({
        target: this.selectedModule.id
      })
      // console.log(sourceEndpoints, targetEndpoints)
      sourceEndpoints.delete()
      targetEndpoints.delete()
      this.addEndpoint(this.selectedModule)
      bus.$emit('reconnect-module')
    }
  }
}
</script>

<style lang="scss" scoped>
.module {
  position: absolute;
  background: transparent;
  cursor: pointer;

  &.selected,
  &:hover {
    outline: 1px solid #80cbc4;
  }

  .description {
    position: absolute;
    width: 180px;

    span {
      display: inline-block;
      padding: 0.2em 0 0.2em 0.2em;
    }
  }
}
</style>
