<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style scoped>

</style>
