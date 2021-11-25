<template>
  <div class="layout">
    <slot name="header">
      <h1 v-if="header">{{ header }}</h1>
    </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    header: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  .layout {
    padding: 50px;
  }
  h1 {
    margin-top: 0;
  }
</style>
