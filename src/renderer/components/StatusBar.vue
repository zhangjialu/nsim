<template>
  <div class="status-bar">准备就绪</div>
</template>

<script>
export default {
  name: 'StatusBar'
}
</script>

<style lang="scss" scoped>
.status-bar {
  width: 100%;
  height: var(--status-bar-height);
  /* border-top: 1px solid #eee; */
  padding: 0 0.5rem;
  color: #aaa;
  display: flex;
  align-items: center;
}
</style>
