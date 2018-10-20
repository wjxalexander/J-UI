<template>
<div class="codecollapse">
  <j-collapse>
    <template slot='title'> 一致性 Consistency </template>
      <template slot='body'> 
       <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
       <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </template>
    </j-collapse>
</div>
</template>

<script>
import Collapse from'../../../src/collapse'
export default {
  components:{
    'j-collapse': Collapse,
  }
}
</script>

<style lang="scss" scoped>
</style>
