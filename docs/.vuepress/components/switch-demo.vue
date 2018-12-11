<template>
  <div class="switch">
    <j-switch></j-switch>
    <j-switch></j-switch>
    <div class="collapsedemo">
      <j-collapse>
        <template slot="title">查看代码</template>
        <template slot="body">
          <pre><code>{{this.code}}</code></pre>
        </template>
      </j-collapse>
    </div>
  </div>
</template>
<script>
import Switch from "../../../src/switch";
import Collapse from "../../../src/collapse";
export default {
  components: {
    "j-switch": Switch,
    "j-collapse": Collapse
  },
  data() {
    return {
      code: `
         <j-switch></j-switch>
         <j-switch></j-switch>
          `
        .replace(/\t+| |/g, "")
        .trim()
    };
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.switch {
  padding: 10px 0;
}
</style>
