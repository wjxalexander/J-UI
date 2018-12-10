<template>
  <div class="carousel clearfix">
    <div class="container" ref="ctn">
      <slot name="content"></slot>
    </div>
    <span class="iconctr left">
      <j-icon class="icon left" name="left"></j-icon>
    </span>
    <span class="iconctr right">
      <j-icon class="icon right" name="right"></j-icon>
    </span>
    <div class="carouselctr" ref="ctr">
      <slot name="ctr"></slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Icon from "./icon";

export default {
  name: "carousel",
  props: {
    selectdot: {
      type: Number || String
    }
  },
  components: {
    "j-icon": Icon
  },
  data() {
    return {
      containerWidth: 0,
      itemWidth: 0,
      eventBus: new Vue(),
      currentindex: this.selectdot
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {},
  mounted() {
    if (this.$children === 0) {
      console.warn("tabs没有子组件");
    } else {
      let containerleft = this.$refs.ctn.getBoundingClientRect().left;
      this.$children.forEach(vm => {
        if (vm.$options.name === "carouselitem") {
          this.itemWidth = vm.$el.getBoundingClientRect().width;
          this.containerWidth += this.itemWidth;
        }
        if (vm.dataid === this.selectdot) {
          this.eventBus.$emit("update:selected", this.selectdot, vm); //事件发布
        }
      });
    }
    //初始化
    this.$refs.ctn.style.width = `${this.containerWidth}px`;
    this.$refs.ctn.style.left = `0px`;

    this.eventBus.$on("update:itemposition", (selectdot, value) => {
      //监听选择的板，控制CSS
      let { left } = this.$refs.ctn.getBoundingClientRect() || 0;
      this.$refs.ctn.style.left = `${left - value}px` || `0px`;
      this.currentindex = selectdot;
      
    });
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 300px;
  height: 188px;
  margin: 10px auto;
  overflow: hidden;
  &.clearfix::after {
    content: "";
    display: block;
    clear: both;
  }
  & .container {
    position: absolute;
    transition: all 300ms;
  }
  & .iconctr {
    position: absolute;
    display: table-cell;
    height: 36px;
    width: 36px;
    cursor: pointer;
    z-index: 10;
    top: 50%;
    transform: translate(0, -50%);
    display: none;
    & .icon {
      height: 40px;
      width: 40px;
      fill: #fff;
    }
    &.left {
      left: 10px;
    }
    &.right {
      right: 10px;
    }
  }
  & .carouselctr {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    width: 100%;
    font-size: 0;
    text-align: center;
  }
  &:hover {
    & .iconctr {
      display: block;
      transition: all 300ms;
    }
  }
}
</style>
