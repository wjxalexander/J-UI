<template>
<div class="j-input" :class="{'error':error}">
  <input type="text" :class="{'error':error}" :value="value" :disabled='disabled' :readonly='readonly'
  @change="$emit('change',$event.target.value)"
  @focus="$emit('focus',$event.target.value)"
  @input="$emit('input',$event.target.value)"
  @blur="$emit('blur',$event.target.value)">
  <template v-if="error">
      <j-icon name = 'error-circle' class="icon icon-error"></j-icon>
      <p class="erro-msg">{{error}}</p>
  </template>
</div>

</template>
<script>
import Icon from "./icon";
export default {
  name: "j-input",
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
    readonly: {
      type: Boolean,
      default: false,
      validator(value) {
        return value === false || value === true;
      }
    },
    value: {
      type: String
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$box-focus-color:#7fc4fd;
$border-color: #bce0fd;
$error-color: #ff6565;
$disabled-color: #838296;
$input-color: #2699fb;
.j-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5em 0.5em;
  > input {
    color: $input-color;
    height: 28px;
    border: 0.5px solid $border-color;
    padding: 1em 10px;
    font-size: 10px;
    outline: none;
    &:focus {
    border: 0.5px solid $box-focus-color;
  }
    &:active {
    border: 0.5px solid $box-focus-color;
  }
    &.error{
      border-color: $error-color;
    }
    &[disabled]{
      cursor: not-allowed;
      color: #FFF;
      background-color: $disabled-color;
    }
  }
  > .icon {
    display: inline-flex;
    height: 0.8em;
    width: 0.8em;
    margin: -1.2em;
    fill: $error-color;
  }
  > .erro-msg {
    display: block;
    width: 100%;
    padding: 0.6em 0;
    font-size: 0.6em;
    color: $error-color;
  }
  

}
</style>


