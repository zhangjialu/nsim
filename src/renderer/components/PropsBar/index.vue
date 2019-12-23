<template>
  <aside v-show="isShowPropsBar" class="props-bar">
    <div class="header">属性栏
      <close-icon class="close-btn" :clicked="hidePropsbar"/>
    </div>
    <!-- 模块相关设置 -->
    <div v-if="selectedModule" class="body">
      <section class="pannal">
        <header class="pannal-header">模块信息</header>
        <div class="pannal-body">
          <div class="form">
            <label for="module-name" class="title">模块名</label>
            <input id="module-name" class="input" disabled type="text" :value="selectedModule.name">
          </div>
          <div class="form">
            <label for="module-id" class="title">id</label>
            <input id="module-id" class="input" disabled type="text" :value="selectedModule.id">
          </div>
          <div class="form">
            <label for="module-position" class="title">位置</label>
            <input
              id="module-position"
              class="input"
              disabled
              type="text"
              :value="`(${selectedModule.location.x}, ${selectedModule.location.y})`"
            >
          </div>
        </div>
      </section>

      <section class="pannal">
        <header class="pannal-header">模块描述</header>
        <div class="pannal-body">
          <label class="form">
            <textarea v-model="moduleDesc"/>
          </label>
          <label class="form">
            <span class="title">位置</span>
            <select v-model="moduleDescDir">
              <option value="top">上</option>
              <option value="bottom">下</option>
              <option value="left">左</option>
              <option value="right">右</option>
            </select>
          </label>
        </div>
      </section>

      <section class="pannal" v-if="selectedModule.params.length !== 0">
        <header class="pannal-header">模块参数</header>
        <div class="pannal-body">
          <label class="form" v-for="param in selectedModule.params" :key="param.name">
            <span class="title">{{param.name}}</span>
            <input
              class="input"
              type="text"
              :id="param.name"
              v-model="param.value"
              @change="onChange"
            >
          </label>
        </div>
      </section>

      <section class="pannal" v-if="selectedModule.class === 'logic'">
        <header class="pannal-header">输入输出</header>
        <div class="pannal-body">
          <label class="form" v-for="port in selectedModule.inputPorts" :key="port.name">
            <span class="title">{{port.name}}</span>
            <input class="input" disabled type="text" v-model="port.value" @change="onChange">
          </label>
          <label class="form" v-for="port in selectedModule.outputPorts" :key="port.name">
            <span class="title">{{port.name}}</span>
            <input class="input" disabled type="text" v-model="port.value" @change="onChange">
          </label>
        </div>
      </section>

      <section class="pannal" v-if="selectedModule.class === 'device'">
        <header class="pannal-header">参数曲线</header>
        <div class="pannal-body">
          <!-- <label class="form">
            <span class="title">图纸大小</span>
            <select id="paperSize" v-model="paperSize">
              <option value="A0">A0 (841 mm x 1189 mm)</option>
              <option value="A1">A1 (594 mm x 841 mm)</option>
            </select>
          </label>-->
          <!-- <chart :labels="labels" :data="data"></chart> -->
          <chart></chart>
        </div>
      </section>
    </div>
    <!-- 图纸相关设置 -->
    <div v-else class="body">
      <section class="pannal">
        <header class="pannal-header">图纸设置</header>
        <div class="pannal-body">
          <label class="form">
            <span class="title">图纸大小</span>
            <select id="paperSize" v-model="paperSize">
              <option value="A0">A0 (841 mm x 1189 mm)</option>
              <option value="A1">A1 (594 mm x 841 mm)</option>
              <option value="A2">A2 (420 mm x 594 mm)</option>
              <option value="A3">A3 (297 mm x 420 mm)</option>
              <option value="A4">A4 (210 mm x 297 mm)</option>
              <option value="A5">A5 (148 mm x 210 mm)</option>
              <!-- <option value="custom">定制</option> -->
            </select>
          </label>
          
          <label class="form">
            <span class="title">图纸方向</span>
            <select v-model="paperDirection">
              <option value="landscape">横向</option>
              <option value="portrait">纵向</option>
            </select>
          </label>

          <div class="form">
            <input class="checkbox" type="checkbox" id="grid" v-model="isShowGrid">
            <label for="grid" class="title">显示网格</label>
          </div>
        </div>
      </section>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import { CloseIcon } from '../icons'
import bus from '../../bus'
import Chart from './Chart'

export default {
  components: {
    CloseIcon,
    Chart
  },
  computed: {
    ...mapState({
      currentFile: state => state.editor.currentFile,
      isShowPropsBar: state => state.main.isShowPropsBar,
      selectedModule: state => state.editor.selectedModule
    }),
    // pHistory() {
    //   const { modules } = this.currentFile.data
    //   const { params } = modules[
    //     modules.findIndex(module => module.id === this.selectedModule.id)
    //   ]
    //   const data = params[params.findIndex(param => param.name === 'P')].history
    //   return data
    // },
    moduleDesc: {
      get() {
        return this.selectedModule.description.data
      },
      set(value) {
        const updatedModule = {
          ...this.selectedModule,
          description: {
            ...this.selectedModule.description,
            data: value
          }
        }
        this.$store.dispatch('UPDATE_SELECTED_MODULE', updatedModule)
      }
    },
    moduleDescDir: {
      get() {
        return this.selectedModule.description.direction
      },
      set(value) {
        const updatedModule = {
          ...this.selectedModule,
          description: {
            ...this.selectedModule.description,
            direction: value
          }
        }
        this.$store.dispatch('UPDATE_SELECTED_MODULE', updatedModule)
      }
    },
    paperSize: {
      get() {
        return this.currentFile.data.paper.size
      },
      set(value) {
        const paperSizeTable = {
          A0: { width: 841, height: 1189 },
          A1: { width: 594, height: 841 },
          A2: { width: 420, height: 594 },
          A3: { width: 297, height: 420 },
          A4: { width: 210, height: 297 },
          A5: { width: 148, height: 210 }
        }
        const { direction } = this.currentFile.data.paper
        let [width, height] = [
          paperSizeTable[value].width * 3.78,
          paperSizeTable[value].height * 3.78
        ] // *3.78转换为像素
        if (direction === 'landscape') {
          ;[width, height] = [height, width]
        }
        this.$store.dispatch('UPDATE_CURRENT_FILE', {
          ...this.currentFile,
          data: {
            ...this.currentFile.data,
            paper: {
              ...this.currentFile.data.paper,
              size: value,
              width,
              height
            }
          }
        })
      }
    },
    paperDirection: {
      get() {
        return this.currentFile.data.paper.direction
      },
      set(value) {
        if (value !== this.currentFile.data.paper.direction) {
          this.$store.dispatch('UPDATE_CURRENT_FILE', {
            ...this.currentFile,
            data: {
              ...this.currentFile.data,
              paper: {
                ...this.currentFile.data.paper,
                direction: value,
                width: this.currentFile.data.paper.height,
                height: this.currentFile.data.paper.width
              }
            }
          })
        }
      }
    },
    isShowGrid: {
      get() {
        return this.currentFile.data.paper.showGrid
      },
      set(value) {
        this.$store.dispatch('UPDATE_CURRENT_FILE', {
          ...this.currentFile,
          data: {
            ...this.currentFile.data,
            paper: {
              ...this.currentFile.data.paper,
              showGrid: value
            }
          }
        })
      }
    }
  },
  methods: {
    hidePropsbar() {
      this.$store.commit('HIDE_PROPS_BAR')
    },
    onChange() {
      this.$store.dispatch('UPDATE_SELECTED_MODULE', this.selectedModule)
    }
  }
}
</script>

<style lang="scss" scoped>
.props-bar {
  flex: 0 0 var(--props-bar-width);
  height: calc(100vh - var(--status-bar-height));
  background: var(--bg-light);
  /* border-left: 1px solid #eee; */
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #eee;
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

  .close-btn {
    float: right;
    cursor: pointer;
    height: 100%;
    padding: 0.1em;
  }

  .pannal {
    margin-bottom: 1em;
  }

  .pannal-header {
    width: 100%;
    height: 2em;
    line-height: 2em;
    font-weight: bold;
    background-color: #f6f7f8;
    margin-bottom: 0.5em;
    padding-left: 0.5em;
  }
  .pannal-body {
    padding: 0 0.5em;

    .form {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      /* height: 2em; */
      padding: 0;
      margin: 0.3em 0;

      .title {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        width: 5rem;
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
        /* border: 1px solid #f6f7f8; */
        border-right: 1px solid #e3e4e7;
        background-color: #f6f7f8;
      }

      .input {
        font: menu;
        width: 100%;
        height: 1.6rem;
        padding: 0;
        margin: 0;
        padding-left: 5.2rem;
        border: 1px solid #e3e4e7;
        /* border-left: none; */
      }

      input:disabled {
        background-color: #f6f7f8;
        border: none;
      }

      textarea {
        font: menu;
        flex: 0 0 100%;
        height: 5rem;
        border: 1px solid #e3e4e7;
      }

      select {
        font: menu;
        width: calc(100% - 5rem);
        height: 1.6rem;
        margin-left: 5rem;
        border: 1px solid #e3e4e7;
      }

      .checkbox + label::after,
      .checkbox + label::before {
        content: '';
        position: absolute;
        top: 0;
        right: -1.6rem;
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        border: 1px solid #e3e4e7;
      }

      .checkbox:focus + label::after {
        border-color: #e3e4e7;
      }

      .checkbox:checked + label::before {
        display: none;
        width: 1rem;
        height: 1rem;
        margin: 0.3rem;
        background-color: #e3e4e7;
      }

      .checkbox:checked + label::before {
        display: block;
      }
    }
  }
}
</style>
