<template>  
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>  
</template>
<script>
export default {
  name: "j-row",
  props: {
    gutter: {
      type: [String, Number],
      default: 0
    },
    align:{
      type: String,
      validator(value){
        return (['top','middle','bottom'].indexOf(value)>=0)
      },
      default: 'middle'
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: - gutter / 2 + "px",
        marginRight: - gutter / 2 + "px"
      };
    },
    rowClass(){
      let {align} = this
      return[align && `align-${align}`]
    }
  },
  created() {
    // console.log("row cretd");
    //这时没有儿子，
  },
  mounted() {
    // console.log("row mounted"); 
    //放在DOM里了
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
      //获取子元素传gutter
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-center{
    justify-content: center;
  }
  &.align-right{
    justify-content: flex-end;
  }
}

</style>
