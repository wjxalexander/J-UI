<template>
<div class="aligncenter" :class="toastClasses">
  <div class="toast" ref="wrapper" >
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  //构造组件的选项
  name: "toast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    //引入closebutton
    closeButton: {
      type: Object,
      //对象两个
      default() {
        return {
          //类似与组件的data,必须return 否则有复用性问题，对象的应用问题，指针
          text: "close",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validator(key) {
        return ["top", "middle", "bottom"].indexOf(key) >= 0;
      },
      default: "top"
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.updateLineStyle();
    }); //nexttick 用法
    this.endClose();
    //mounted过后wrapper的高度可能为0，需要异步解决，settimeOut tricky
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  methods: {
    updateLineStyle() {
      if (this.position === "top" || this.position === "bottom") {
        console.log(this.position)
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      }else{
        this.$refs.line.style.width = `${
          this.$refs.wrapper.getBoundingClientRect().width
        }px`;
      }
    },
    endClose() {
      if (this.autoClose) {
        setTimeout(() => {
          console.log("going to close", this.autoClose);
          this.close();
        }, this.autoClose * 1000);
      }
    },

    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      //点击关闭后执行两件事情：关闭及回调
      this.close();
      //执行回调且不是undefined
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this); //this === toast实例 app中就可以拿到toast实例 从而使用toast方法
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(59, 134, 255, 1);
@keyframes sildeup {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes sildedown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.aligncenter {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 0;
    .toast {
      animation: sildedown $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .line {
    height: 100%;
    border-left: 1px solid #fff;
    margin-left: 16px;
  }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: sildeup $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .line {
    height: 100%;
    border-left: 1px solid #fff;
    margin-left: 16px;
  }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: fadein $animation-duration;
    }
     .line {
       height: 100%;
    border-top: 1px solid #fff;
  }
  .close {
    cursor: pointer;
    padding: 3px;
    flex-shrink: 0;
  }
  }
}
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    cursor: pointer;
    padding-left: 16px;
    flex-shrink: 0;
  }
  
}
</style>
