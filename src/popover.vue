<template>
<div class="popver" @click="onClick" ref="popover">
  <div ref='contentwrap' class="content-warp" v-if="visible" 
  :class="{[`position-${this.lowerCasePosition}`]:true}">
      <slot name ='content'></slot>
  </div>
  <span ref='trigger'>
      <slot ></slot>
  </span>
</div>
</template>
// slot 是不接受class click refs 等属性的
 
<script>
export default {
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        let valueLowerCase = value.toLowerCase();
        return ["top", "bottom", "left", "right"].indexOf(valueLowerCase) >= 0;
      }
    }
  },
  data() {
    return {
      visible: false,
      lowerCasePosition: this.position.toLowerCase()
    };
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    }
    console.log(this.$refs.trigger.offsetWidth);
  },
  beforeDestroy() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.onClick);
    }
  },
  methods: {
    popDialogPosition() {
      const { contentwrap, trigger } = this.$refs;
      document.body.appendChild(contentwrap);
      const { top, right, bottom, left, width, height } = trigger.getBoundingClientRect();
      const { height: contentwrapHeight, width:contentwrapWidth } = contentwrap.getBoundingClientRect();
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX + (width-contentwrapWidth)/2,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX+ (width-contentwrapWidth)/2,
        },
        left: {
          top: top + window.scrollY + (height - contentwrapHeight) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - contentwrapHeight) / 2,
          left: left + window.scrollX + width
        }
      };
      contentwrap.style.left = positions[this.lowerCasePosition].left + "px";
      contentwrap.style.top = positions[this.lowerCasePosition].top + "px";
    },
    onClickDocument(e) {
      //只关注点击DOC时关闭
      const { contentwrap, popover } = this.$refs;
      if (popover && (popover === e.target || popover.contains(e.target))) {
        return;
      }
      if (
        contentwrap &&
        (contentwrap === e.target || contentwrap.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    onClick() {
      if (this.$refs.trigger.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        //父元素有overflow：hidden解决办法：
        this.popDialogPosition()
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument); //必须remove 否则会产生无数个listener
    }
  }
};
</script>
<style lang="scss" scoped>
$cotent-color: #43425d;
.content-warp {
  font-size: 0.7em;
  position: absolute;
  border-radius: 2px;
  background-color: $cotent-color;
  color: #fff;
  position: absolute;
    padding: .3em 1.5em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 6px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-120%);
      margin-top: -10px;
      &::before, &::after {
        left: 50%;
        transform: translateX(-50%)
      }
      &::before {
        border-top-color: $cotent-color;
        border-bottom: none;
        top: 100%;
      }
      &::after {
        border-top-color: $cotent-color;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      transform: translateY(20%);
      &::before, &::after {
        left: 50%;
        transform: translateX(-50%)
      }
      &::before {
        border-top: none;
        border-bottom-color: $cotent-color;
        bottom: 100%;
      }
      &::after {
        border-top: none;
        border-bottom-color: $cotent-color;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: $cotent-color;
        border-right: none;
        left: 100%;
      }
      &::after {
        border-left-color: $cotent-color;
        border-right: none;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: $cotent-color;
        border-left: none;
        right: 100%;
      }
      &::after {
        border-right-color: $cotent-color;
        border-left: none;
        right: calc(100% - 1px);
      }
    }
}
</style>
