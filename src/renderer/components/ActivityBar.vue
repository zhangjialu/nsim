<template>
  <aside class="activity-bar">
    <file-outline-icon
      class="activity-bar__icon"
      :active="sideBarTitle === '查看文件'"
      title="查看文件"
      width="2em"
      height="2em"
      :clicked="() => toggleActivityBar('查看文件')"
    />
    <widgets-icon
      class="activity-bar__icon"
      :active="sideBarTitle === '查看模块'"
      title="查看模块"
      width="2em"
      height="2em"
      :clicked="() => toggleActivityBar('查看模块')"
    />
  </aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { FileOutlineIcon, WidgetsIcon } from './icons'
import ModuleTemplate from './modules/ModuleTemplate'

export default {
  components: {
    FileOutlineIcon,
    WidgetsIcon,
    ModuleTemplate
  },
  data() {
    return {
      active: ''
    }
  },
  computed: {
    ...mapState({
      isShowSideBar: state => state.main.isShowSideBar,
      sideBarTitle: state => state.main.sideBarTitle
    })
  },
  methods: {
    toggleActivityBar(activeItem) {
      if (!this.isShowSideBar) {
        this.$store.commit('SET_SIDE_BAR_TITLE', activeItem)
        this.$store.commit('SHOW_SIDE_BAR')
      } else {
        if (this.sideBarTitle === activeItem) {
          this.$store.commit('SET_SIDE_BAR_TITLE', '')
          this.$store.commit('HIDE_SIDE_BAR')
        } else {
          this.$store.commit('SET_SIDE_BAR_TITLE', activeItem)
          this.$store.commit('SHOW_SIDE_BAR')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-bar {
  flex: 0 0 var(--activity-bar-width);
  height: calc(100vh - var(--status-bar-height));
  /* border-right: 1px solid #eee; */
  background: var(--bg-light);
  margin: 0;

  &__icon {
    padding: 0.5em;
    cursor: pointer;

    &:hover {
      background: var(--bg-active);
    }
  }
}
</style>
