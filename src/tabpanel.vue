<template>
  <div class="tabpanel" v-if="shownOnScreen" :class="classes">
    <slot name='content'><slot>  
  </div>  
</template>
<script>
export default {
  name: "tabpanel",
  props: {
    name: {
      type: String||Number,
      required: true
    }
  },
  data() {
    return {
      shownOnScreen: false
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.shownOnScreen = true;
      } else {
        this.shownOnScreen = false;
      }
    });
  },
  computed:{
    classes(){
      return{
        active: this.shownOnScreen
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.tabpanel{
  &.active{
    padding: 1em;
  }
}
</style>
