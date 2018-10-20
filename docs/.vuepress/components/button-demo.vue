<template>
  <div class="buttondemo">
    <j-button> Normal </j-button>
    <j-button :loadingfunc=true> Load button </j-button>
    <j-button :disabled=true> Disabled </j-button>
    <div class="collapsedemo">
      <j-collapse>
        <template slot='title' > 查看代码 </template>
        <template slot='body'> 
          <pre>
            <code>
              {{this.code}}
            </code>
          </pre>
        </template>
      </j-collapse>
    </div>
  </div>
</template>
<script>
import Button from "../../../src/button";
import Collapse from "../../../src/collapse";
export default {
  components: {
    "j-button": Button,
    "j-collapse": Collapse
  },
  data() {
    return {
      code: `
        <j-button> Normal </j-button>
        <j-button :loadingfunc=true> Load button </j-button>
        <j-button :disabled=true> Disabled </j-button>
          `
    };
  }
};
</script>
<style lang="scss" scoped>
.j-button {
  margin-right: 0.3em;
  margin-bottom: 0.5em;
}
.buttondemo {
  padding-top: 0.3em;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  & .collapsedemo {
    display: block;
    width: 100%;
  }
}
</style>
