<template>
<div class="inpuedemo">
  <div class="basicinpt">
    <j-input placeholder="基本使用"></j-input>
    <j-input value="Disabled" :disabled=true></j-input>
    <j-input value="readonly" :readonly=true></j-input>
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
import Input from "../../../src/input";
import Collapse from "../../../src/collapse";
export default {
  components: {
    "j-input": Input,
    "j-collapse": Collapse
  },
  data() {
    return {
      message: "",
      currentTab: "education",
      code: `
      <j-input placeholder="基本使用"></j-input>
      <j-input value="Disabled" :disabled=true></j-input>
      <j-input value="readonly" :readonly=true></j-input>
      `.replace(/^ {6}/gm, '').trim()
    };

  },
  created() {},
  methods: {
    showErro() {
      console.warn("请检查用户名");
      return "用户名不符合规则";
    }
  }
};
</script>
<style lang="scss" scoped>
.basicinpt {
  display: inline-flex;
  & .j-input {
    margin-right: 0.3em;
  }
}
</style>
