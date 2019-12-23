<template>
  <div class="default-page">
    <!-- <h1>欢迎使用 Nsim!</h1> -->
    <button @click="newFile">新建文件 (Ctrl + N)</button>
    <button @click="openFile">打开文件 (Ctrl + O)</button>
    <button @click="openFolder">打开文件夹 (Ctrl + Shift + O)</button>
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
  methods: {
    newFile() {
      this.$store.dispatch('ASK_FOR_NEW_FILE')
    },
    openFile() {
      this.$store.dispatch('ASK_FOR_OPEN_FILE')
    },
    openFolder() {
      this.$store.dispatch('ASK_FOR_OPEN_FOLDER')
    }
  }
}
</script>

<style lang="scss" scoped>
.default-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
}
button {
  font: menu;
  width: 15rem;
  height: 2rem;
  margin: 0.2rem;
  padding: 0.3rem 1rem;
  background-color: #fff;
  border: 1px solid #e3e4e7;
  cursor: pointer;
}

button:hover {
  background-color: #e3e4e7;
}
</style>
