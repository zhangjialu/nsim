<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    role="img"
    @click.stop="clicked"
    :class="{ active: active }"
  >
    <svg :fill="fillColor" :width="width" :height="height" viewBox="0 0 24 24">
      <title>{{ title }}</title>
      <path :d="path"></path>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    clicked: {
      type: Function
    },
    path: {
      type: String
    },
    title: {
      type: String,
      default: 'File Outline icon'
    },
    decorative: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '1em'
    },
    height: {
      type: String,
      default: '1em'
    },
    fillColor: {
      type: String,
      default: '#777'
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
}
.active {
  background: #eee;
}
</style>
