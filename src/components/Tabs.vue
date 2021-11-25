<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        class="tab"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      selectedIndex: 0,
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(tabIndex) {
      this.selectedIndex = tabIndex;
      this.tabs.forEach((tab, index) => {
        // eslint-disable-next-line no-param-reassign
        tab.isActive = index === tabIndex;
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .tabs {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .tab {
    padding: 20px 5px;
    border-bottom: 2px solid $green;
    cursor: pointer;

    & + & {
      margin-left: 50px;
    }
  }
</style>
