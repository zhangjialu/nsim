<template>
  <div class="workspace">
    <div class="top">
      <activity-bar></activity-bar>
      <side-bar></side-bar>
      <editor-with-tabs></editor-with-tabs>
      <props-bar v-if="currentFile"/>
    </div>
    <div class="bottom">
      <status-bar></status-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ActivityBar from "./ActivityBar";
import SideBar from "./SideBar";
import EditorWithTabs from "./EditorWithTabs";
import PropsBar from "./PropsBar";
import StatusBar from "./StatusBar";

export default {
  name: "Workspace",
  components: {
    ActivityBar,
    SideBar,
    EditorWithTabs,
    PropsBar,
    StatusBar
  },
  computed: {
    ...mapState({
      currentFile: state => state.editor.currentFile
    })
  }
};
</script>

<style lang="scss" scoped>
.workspace {
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
  }
}
</style>
