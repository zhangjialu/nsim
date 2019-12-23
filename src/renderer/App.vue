<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Nsim',
  created() {
    const { dispatch } = this.$store
    dispatch('LISTEN_FOR_OPEN_FOLDER')
    dispatch('LISTEN_FOR_OPEN_FILE')
    dispatch('LISTEN_FOR_SIDEBAR_CONTEXT_MENU')
    dispatch('LISTEN_FOR_SAVE')
    dispatch('LISTEN_FOR_NEW_FILE')
    dispatch('LISTEN_FOR_SET_PATHNAME')
    dispatch('LISTEN_FOR_RUN_SIMULATE')
    dispatch('LISTEN_FOR_SIMULATE_RESULTS')
    dispatch('LISTEN_FOR_RUN_ONE_STEP_SIMULATE')
    dispatch('LISTEN_FOR_TEST')
  }
}
</script>

<style>
:root {
  box-sizing: border-box;

  --text-dark: #454545;
  --text-light: #fafafa;
  --bg-dark: #282c34;
  --bg-light: #fff;
  --bg-active: #eee;
  --activity-bar-width: 2rem;
  --side-bar-width: 15rem;
  /* --props-bar-width: 18rem; */
  --props-bar-width: 21rem;
  --tabs-bar-height: 1.7rem;
  --status-bar-height: 1.5rem;
}

*,
::before,
::after {
  box-sizing: inherit;
  user-select: none;
}

body {
  font: menu;
  font-size: 12px;
  color: var(--text-dark);
  cursor: default;
  margin: 0;
  padding: 0;
}

.jtk-endpoint {
  cursor: crosshair;
}

.jtk-connector {
  cursor: auto;
}
</style>
