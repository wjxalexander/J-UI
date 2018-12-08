<template>
<div class="carousel clearfix">
  <div class="container" ref = 'ctn'>
    <slot name = 'content'></slot>
  </div>

  <div class="carouselctr" ref = 'ctr'>
    <slot name = 'ctr'></slot>
  </div>
  </div>  
</template>
<script>
import Vue from "vue";
export default {
  name: "carousel",
  props: {
    selectdot: {
      type: Number || String
    }
  },
  data() {
    return {
      containerWidth: 0,
      itemWidth: 0,
      eventBus: new Vue(),
      currentindex:this.selectdot,
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
    this.$refs.ctn.style.left =   `0px`

    this.eventBus.$on("update:itemposition",(selectdot,value)=>{//监听选择的板，控制CSS
      let{left} = this.$refs.ctn.getBoundingClientRect()||0;
      this.$refs.ctn.style.left =  `${left - value}px`|| `0px`
      this.currentindex = selectdot;
    })
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
  & .carouselctr {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    width: 100%;
    font-size: 0;
    text-align: center;
  }
}
</style>
