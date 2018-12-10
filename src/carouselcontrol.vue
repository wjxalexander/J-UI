<template>
<div class="carouselcontrolarea">
   <li v-for="n in totalnum" :dataid='n' class='carouselcontrol' @click="onClick($event)" :class="classes"></li>
</div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "carouselcontrol",
  components: {
    "j-icon": Icon
  },
  props: {
    totalnum: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      active: false,
      dataid: 0
    };
  },
  inject: ["eventBus"],
  created() {
   
  },
  mounted() {
     this.eventBus.$on("update:selected", (selectdot, vm) => {//点亮选择bar
      if (selectdot === this.dataid) {
        for(let i = 0; i<this.$el.children.length;i++){
          if(parseInt(this.dataid)===parseInt(this.$el.children[i].getAttribute('dataid'))){
            this.$el.children[i].classList.add('active')
          }
          else {
       this.$el.children[i].classList.remove('active')
      }
        }
        //this.active = true;
      } 
    });
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  methods: {
    onClick(e) {
    let targetId= parseInt(e.target.getAttribute('dataid'))//获取目标dataid
    this.dataid = targetId
      this.eventBus.$emit("update:selected", this.dataid, this);//单项数据流
       console.log(this.dataid)
        console.log(this.$el.children[0].getAttribute('dataid'))
          console.log()

    }
    
  }
};
</script>
<style lang="scss" scoped>

  .carouselcontrol {
  display: inline-block;
  width: 16px;
  height: 4px;
  border-radius: 1px;
  outline: none;
  margin: 0 3px;
  cursor: pointer;
  background: #fff;
  opacity: 0.3;
  transition: all 500ms;
  &.active {
  opacity: 1;
  width: 24px;    
  
}
}
  


</style>
