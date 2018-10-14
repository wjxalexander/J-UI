<template>
  <button class="j-button" v-bind:disabled = 'currenstate' @click="changeState()" >
      <slot v-if = 'loading'></slot>
      <template v-if='!loading'>
        <div class="loadingwrap">
          <j-icon class="icon loading"  name = 'loading'></j-icon>
          <span>Loading</span>
        </div>

      </template>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "j-button",
  components: {
    "j-icon": Icon
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
      validator(value) {
        return value === false || value === true;
      }
    },
    loadingfunc: {
      type: Boolean,
      default: false,
      validator(value) {
        return value === false || value === true;
      }
    }
  },
  data() {
    return {
      loading: {
        type: Boolean,
        default: false
      },
      currenstate: this.disabled
    };
  },
  methods: {
    changeState(e) {
      this.$emit('click',e)
      if (this.loadingfunc === true) {
        this.loading = !this.loading;
        this.currenstate = !this.currenstate;
      } else {
        return;
      }
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: #3b86ff;
$button-active-bg: #1062e5;
$button-disabled-bg: #79acff;
$border-radius: 4px;
$color: #fff;
$border-color: #fff;
$border-color-hover: #666;
@keyframes rotate {
  from {
    transform: rotate(-360deg);
  }
}
.j-button {
  width: 8em;
  display: inline-block;
  color: $color;
  font-size: $font-size;
  height: $button-height;
  padding: 0.5em 0;
  border-radius: $border-radius;
  border: 0.5px solid $border-color;
  background: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    background-color: $button-disabled-bg;
    cursor: not-allowed;
  }
  > .loadingwrap {
    display: inline-flex;
    align-items: center;
  }
  .loading {
    animation: rotate 1.5s infinite linear;
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: #fff;
    margin-right: 3px;
  }
}
</style>