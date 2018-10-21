<template>
<div class="carouselitem" :class="classes">
  <slot></slot>
  </div>  
</template>
<script>
export default {
  name: "carouselitem",
  props: {
    dataid: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      active: false,
    };
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (selectdot, vm) => {
      if (selectdot === this.dataid) {
        this.active = true;
        let {left} = this.$el.getBoundingClientRect()
        this.eventBus.$emit("update:itemposition",selectdot,left)
      } else {
        this.active = false;
      }
    });
  },
  mounted() {
  },
  computed:{
    classes() {
      return {
        active: this.active
        };
    }
  }
};
</script>
<style lang="scss" scoped>
.carouselitem {
  float: left;
  background: #364d79;
  width: 300px;
  height: 188px;
  margin: 0;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
