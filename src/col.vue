<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot> </slot>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "vueGrid",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  data() {
    //一开始就去读data,data中的属性是不会变的
    return {
      gutter: 0
      //  没毛用： colStyle:{
      //     paddingLeft: this.gutter / 2 + 'px',
      //     paddingRight: this.gutter / 2 + 'px'
      //   }
    };
  },
  methods:{
    createClass(obj, str = ''){
      if(!obj){return []}
      let array = []
      //console.log(obj.span)
      if(obj.span){array.push(`col-${str}${obj.span}`)}
      if(obj.offset){array.push(`offset-${str}${obj.offset}`)}
      //console.log(array)
      return array
    }
  },
  computed: {
    colClass() {
      let { span, offset,  ipad, narrowPc, pc, widePc } = this; //结构
      let createClasses = this.createClass;
      return [
        ...createClasses({span,offset}),
        ...createClasses(ipad,'ipad-'),  
        ...createClasses(narrowPc,'narrowPc-'),
        ...createClasses(pc,'pc-'),
      ];
    },
    colStyle() {
      // console.log('gutter变了我也要变')
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  //说明class前缀
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      //col-n
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {

    &.#{$class-prefix}#{$n} {
      //col-n
      margin-left: ($n / 24) * 100%;
    }
  }
 
  @media (min-width: 577px){
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: col-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset--narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px){
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
}
</style>

