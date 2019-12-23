<template>
  <ul class="tree-view">
    <tree-view-item :model="treeData"></tree-view-item>
  </ul>
</template>

<script>
import TreeViewItem from "./TreeViewItem";

export default {
  name: "TreeView",
  components: {
    TreeViewItem
  },
  props: {
    treeData: {
      type: Object,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.tree-view {
  /* font-size: 10px; */
  padding-left: 0;
  margin: 0.5em 0;
  line-height: 1.5em;
  list-style-type: none;
}
</style>
