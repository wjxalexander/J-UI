<template>
<div class="groupbtn">
   <slot></slot>
</div>
</template>
<script>
import Button from "./button";
export default {
  mounted(){
      for(let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`j-button的子元素必须是j-button,但是 这里是${name}`)
        }
      }
    }
};
</script>
<style lang="scss" scoped>
$border-radius: 4px;
.groupbtn{
 display: inline-flex;
 vertical-align: middle;
 >.j-button{
     border-radius: 0;
     &:not(:first-child){
      margin-left: -2px;
    }
  &:nth-child(1){
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
  }
  &:last-child{
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
  }
 }
}
</style>

