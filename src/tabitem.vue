<template>
  <div ref = 'item' class="tabs-item" @click="onClick" :class="classes" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabitem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      direction:'',
    };
  },
  inject: ["eventBus"],
  mounted(){
    this.eventBus.$on("update:selected", (name, item, direction) => {
      this.direction = direction
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  data(){
    return{
      active: false,
    }
  },
  methods: {
    onClick() {
      this.eventBus.$emit("update:selected", this.name,this, this.direction);//传入this
    }
  },
  computed: {
    classes() {
      return {
        active: this.active };
    }
  }
};
</script>

<style lang="scss" scoped>
$active-color: #3B86FF;
$default-color: rgba(0, 0, 0, 0.65);
.tabs-item {
  color: $default-color;
  font-size: 16px;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0.5em 0.5em;
  display: flex;
  align-items: center;
  display: block;

  &.active {
    color: $active-color;
  }
  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
 
}
</style>