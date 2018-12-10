<template>
<div>
  <div class="popoverdemo" style="display:inline-flex">
      <j-popover position='left'>
        <template slot = "content">
          <div>Left Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
      <j-popover>
        <template slot = "content">
          <div>Top Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
      <j-popover position='bottom'>
        <template slot = "content">
          <div>Bottom Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
      <j-popover position='right'>
        <template slot = "content">
          <div>Right Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
    </div>
     <div class="collapsedemo">
      <j-collapse>
        <template slot='title' > 查看代码 </template>
        <template slot='body'> 
          <pre><code>{{this.code}}</code></pre>
        </template>
      </j-collapse>
    </div>
    </div>

</template>
<script>
import Popover from ".../../../src/popover";
import Button from "../../../src/button";
import Collapse from "../../../src/collapse";
export default {
  components:{
    "j-button": Button,
    "j-collapse": Collapse,
    "j-popover": Popover,
  },
  data(){
    return{
      code:`
       <j-popover position='left'>
        <template slot = "content">
          <div>Left Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
      <j-popover>
        <template slot = "content">
          <div>Top Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
      
      <j-popover position='bottom'>
        <template slot = "content">
          <div>Bottom Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
      <j-popover position='right'>
        <template slot = "content">
          <div>Right Tooltip</div>
        </template>
        <template>
          <j-button>click</j-button>  
        </template>    
      </j-popover>
      `.replace(/^ {6}/gm, "")
        .trim()
    }
  }
}
</script>
<style lang="scss" scoped>
.popoverdemo{
  padding: 1em;
}

</style>
