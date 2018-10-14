<template>
  <div class="tabs" :class="positionmethod">
    <slot></slot>    
  </div>    
</template>
<script>
import Vue from 'vue'
export default {
  name: 'tabs',
  props: {
    currenttab:{
        type: String||Number
      },
    direction:{
       type: String,
       validator(value){
         return ['vertical','flat'].indexOf(value) >=0
       },
       default:'flat'
    }
  },
  data(){
    return{
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  created(){
  },
  computed:{
    positionmethod(){
      return{
        [`direction-${this.direction}`]: true,
      }
    }
  },
  mounted(){
    if(this.$children === 0){
      console.warn('tabs没有子组件')
    }
    this.$children.forEach((vm)=>{
      if(vm.$options.name==='tabNav'){
        vm.$children.forEach((item)=>{
          if(item.$options.name ==='tabitem' && item.name === this.currenttab){
             this.eventBus.$emit('update:selected', this.currenttab, item, this.direction)//事件发布
             this.eventBus.$emit('update:direction',this.direction)
          }
        })
      }
    })

  },
  methods:{

  },

 
};
</script>
<style lang="scss" scoped>
.tabs{
 &.direction-flat{
   display: flex;
  flex-direction: column
 }
 &.direction-vertical{
   display: flex;
 }
}
</style>
