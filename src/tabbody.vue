<template>
  <div class="tab-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-body',
  inject: ['eventBus'],
  created(){
  }
}
</script>

<style lang="scss" scoped>
  .tab-body{
  }
</style>