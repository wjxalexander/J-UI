<template>
  <div class="collapse">
    <div class="titlewrap" id="header" @click="showOnpanel">
      <slot name='title'></slot>
    </div>
    <transition name="slide"> 
    <div id="body" class="bodywrap" v-if="visible" ref="body" :class="`ondisplaypanenl-${this.visible}`">
      <slot name='body'></slot>
    </div>
    </transition>

    </div>  
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      visible: false,
      eventBus: new Vue()
    };
  },
  provide() {
    eventBus: this.eventBus;
  },
  methods: {
    showOnpanel() {
      this.visible = !this.visible;
      console.log(this.$refs.body);
    },
    
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$refs.body);
    }, 1000);
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
$content-padding: 10px;
.collapse {
    width: 100%;
}
.titlewrap {
  padding: $content-padding;
  cursor: pointer;
  color: #3b86ff;
}
.bodywrap {
  transition: all 1s;
  padding: $content-padding;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-2em);
  opacity: 0;
}
</style>
