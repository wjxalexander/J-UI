<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'toast',
}
</script>
<style lang="scss" scoped>
.toast{
  border: 1px solid red;
  position:fixed;
  top: 0;
  left:50%;
  transform: translateX(-50%);
  line-height: 1.5;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
