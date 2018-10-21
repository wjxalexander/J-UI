<template>
<div class="inpuedemo">
  <j-input v-model="message"></j-input>
  <p style="font-size:0.8em">message is: {{message}}</p>
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
      <js>:
       data:{
        message: '',
        }
      <HTML>:
        <j-input v-model="message"></j-input>
        <p style="font-size:0.8em">message is {{message}}</p>
      `
        .replace(/^ {6}/gm, "")
        .trim()
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
