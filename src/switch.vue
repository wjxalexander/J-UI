<template>
<div class="switch">
    <label class="clearfix">
      <input type="checkbox" id="switchbox" name="horns" v-model="checksts" :checked="checksts">
      <span class="switchbackground" :class="{'ischecked':checksts}"></span>
    </label>
</div>
</template>
<script>
export default {
    name: 'switcher',
    data(){
        return{
            checksts: false
        }
    }
    
}
</script>
<style lang="scss" scoped>
$switch-border-color:#dcdfe6;
$switch-background-color:#dcdfe6;
$switch-border-active-color: #409eff;
$switch-background-active-color:#409eff;
$switch-container-height: 20px;
$switch-button-background: #fff;
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box
    }
.switch{
    #switchbox{
        position: absolute;
        height: 0px;
        width: 0px;
        opacity: 0;
        margin: 0;
    }
   .switchbackground{
       width: 40px;
       display: inline-block;
       border: 1px solid $switch-border-color;
       background-color: $switch-background-color;
       border-radius: 10px;
       height: $switch-container-height;
       position: relative;
    &.ischecked{
        border-color: $switch-border-active-color;
        background-color: $switch-background-active-color
    }
    &::after{
        content: "";
        position: absolute;
        top:1px;
        left: 1px;
        border-radius: 100%;
        width: 16px;
        height: 16px;
        background-color: $switch-button-background;
        transition: all 300ms;
    }
    &.ischecked::after{
        left: 100%;
        margin-left: -17px
    }
    }
    & .clearfix::after {
      content: "";
      display: block;
      clear: both;
    }
    }
</style>
