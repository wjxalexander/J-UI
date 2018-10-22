<template>
  <li class='carouselcontrol' @click="onClick" :class="classes"></li>
</template>
<script>
import Icon from "./icon";
export default {
  name: "carouselcontrol",
  components: {
    "j-icon": Icon
  },
  props: {
    dataid: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (selectdot, vm) => {//点亮选择bar
      if (selectdot === this.dataid) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  mounted() {},
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  methods: {
    onClick() {
      this.eventBus.$emit("update:selected", this.dataid, this);//单项数据流
    }
  }
};
</script>
<style lang="scss" scoped>
.carouselcontrol {
  display: inline-block;
  width: 16px;
  height: 4px;
  border-radius: 1px;
  outline: none;
  margin: 0 3px;
  cursor: pointer;
  background: #fff;
  opacity: 0.3;
  transition: all 500ms;
  &.active {
  opacity: 1;
  width: 24px;    
  }
}
</style>
