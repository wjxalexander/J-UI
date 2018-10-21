<template>
<div class="tabs-nav" :class="itempositionmethod" ref="nav">
    <slot></slot>
    <div class="line" ref = 'line'></div>
</div>
</template>
<script>
export default {
  name: "tabNav",
  props: {},
  data() {
    return {
      direction: "flat"
    };
  },
  inject: ["eventBus"],
  created() {},
  mounted() {
    this.eventBus.$on("update:selected", (name, item, direction) => {
      this.direction = direction;
      if (this.direction === "flat") {
        let offsetX = this.$refs.nav.getBoundingClientRect().left;
        let { left, right } = item.$el.getBoundingClientRect();
        this.$refs.line.style.left = `${left - offsetX}px`;
        this.$refs.line.style.right = `${right}px`;
      } else if (this.direction === "vertical") {
        let offsetY = this.$refs.nav.getBoundingClientRect().top;
        let { top, bottom } = item.$el.getBoundingClientRect();
        this.$refs.line.style.top = `${top - offsetY}px`;
        this.$refs.line.style.bottom = `${bottom}px`;
      }
    });
  },
  computed: {
    itempositionmethod() {
      return {
        [`item-direction-${this.direction}`]: true
      };
    }
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$active-color: #3b86ff;
$border-color: #e9e9f0;
.tabs-nav {
  min-height: $tab-height;
  position: relative;
  display: flex;
  &.item-direction-vertical {
    flex-direction: column;
    border-right: 1px solid $border-color;
    & .line {
      position: absolute;
      top: 0;
      height: 36px;
      display: inline-block;
      border: 1px solid $active-color;
      transition: all 300ms;
    }
  }
  &.item-direction-flat {
    border-bottom: 1px solid $border-color;
    & .line {
      position: absolute;
      bottom: 0;
      width: 41.67px;
      display: inline-block;
      border: 1px solid $active-color;
      transition: all 300ms;
    }
  }
}
</style>
