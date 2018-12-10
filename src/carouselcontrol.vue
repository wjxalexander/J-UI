<template>
  <div class="allctr">
    <div class="slidebtns clearfix">
      <span class="iconctr left" @click="reduceindex">
        <j-icon class="icon left" name="left"></j-icon>
      </span>
      <span class="iconctr right" @click="addindex">
        <j-icon class="icon right" name="right"></j-icon>
      </span>
    </div>
    <div class="carouselcontrolarea">
      <li
        v-for="n in totalnum"
        :dataid="n"
        class="carouselcontrol"
        @click="onClick($event)"
        :class="classes"
        :key="n"
      ></li>
    </div>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "carouselcontrol",
  components: {
    "j-icon": Icon
  },
  props: {
    totalnum: {
      type: Number,
      required: true
    },
    defaultselect: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      dataid: this.defaultselect,
    };
  },
  inject: ["eventBus"],
  created() {

  },
  mounted() {
    this.eventBus.$on("update:selected", (selectdot, vm) => {
      //点亮选择bar
      if (selectdot === this.dataid) {
        let length = this.$el.children[1].children.length;
        for (let i = 0; i < length; i++) {
          parseInt(this.dataid) ===
          parseInt(this.$el.children[1].children[i].getAttribute("dataid"))
            ? this.$el.children[1].children[i].classList.add("active")
            : this.$el.children[1].children[i].classList.remove("active");
        }
      }
    });
  },

  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  methods: {
    emitToEventBus() {
      this.eventBus.$emit("update:selected", this.dataid, this); //单项数据流
    },
    onClick(e) {
      let targetId = parseInt(e.target.getAttribute("dataid")); //获取目标dataid
      this.dataid = targetId;
      this.emitToEventBus();
    },
    addindex() {
      this.dataid++;
      if(this.dataid>this.totalnum){
        this.dataid = 1
      }
      this.emitToEventBus();
    },
    reduceindex(){
      this.dataid--;
      if(this.dataid<1){
        this.dataid = this.totalnum
      }
      this.emitToEventBus();
    }
  }
};
</script>
<style lang="scss" scoped>
.allctr {
  position: relative;
  width: 100%;
  height: 100%;
  & .slidebtns {
    &.clearfix::after {
      content: "";
      display: block;
      clear: both;
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
  }

  & .carouselcontrolarea {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    & .carouselcontrol {
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
  }
  &:hover {
    & .iconctr {
      display: block;
      transition: all 300ms;
    }
  }
}
</style>
