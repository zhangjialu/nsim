<template>
  <div>
    <div>
      <div class="module-explorer">
        <p>[-] 控制逻辑模块</p>
        <div class="module-explorer">
          <div class="module-item" v-for="(module, index) in logicModules" :key="module.id">
            <img
              :src="module.image.dataUrl"
              :alt="module.name"
              :data-index="index"
              draggable="true"
              @dragstart="onDragStart"
              @dragend="onDragEnd"
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <p>[-] 热力设备模块</p>
        <div class="module-explorer">
          <div class="module-item" v-for="(module, index) in deviceModules" :key="module.id">
            <img
              :src="module.image.dataUrl"
              :alt="module.name"
              :data-index="index + 16"
              draggable="true"
              @dragstart="onDragStart"
              @dragend="onDragEnd"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModuleExplorer',
  computed: {
    ...mapState({
      modules: state => state.main.modules
    }),
    logicModules() {
      return this.modules.filter(module => module.class === 'logic')
    },
    deviceModules() {
      return this.modules.filter(module => module.class === 'device')
    }
  },
  methods: {
    onDragStart(e) {
      e.target.style.opacity = 0.5
      // console.log(e.target.dataset.index)
      e.dataTransfer.setData('index', e.target.dataset.index) //TODO
      e.dataTransfer.setData('offsetX', e.offsetX)
      e.dataTransfer.setData('offsetY', e.offsetY)
    },
    onDragEnd(e) {
      e.target.style.opacity = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.module-explorer {
  display: flex;
  flex-wrap: wrap;
}

.module-item {
  width: calc(var(--side-bar-width) / 4);
  height: calc(var(--side-bar-width) / 4);
  border: 1px solid #aaa;
  margin-top: -1px;
  margin-right: -1px;
  cursor: pointer;
  padding: 0.2em;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
