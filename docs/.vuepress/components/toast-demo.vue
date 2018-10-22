<template>
  <div class="toastdemo">
      <j-button @click='showToast("middle")'>click mid</j-button>
      <j-button @click='showToast("top")'>click top</j-button>
      <j-button @click='showToast("bottom")'>click bot</j-button>
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
import Vue from "vue";
import Plugin from "../../../src/plugin";
import Collapse from "../../../src/collapse";
import Button from "../../../src/button";
Vue.use(Plugin);
export default {
  components: {
    "j-button": Button,
    "j-collapse": Collapse
  },
  data() {
    return {
      code: `
      <js>:
        methods: {
          showToast(position) {
            this.$toast("你好！！", {
              enableHtml: false,
              position: position,
          //回调
       closeButton: {
          text: "close",
          callback() {
            console.log("用户提前点击");
          }
        }
      });
    }
  }
      <HTML>:
      <div class="toastdemo">
      <j-button @click='showToast("middle")'>click mid</j-button>
      <j-button @click='showToast("top")'>click top</j-button>
      <j-button @click='showToast("bottom")'>click bot</j-button>
    <div class="collapsedemo">
      <j-collapse>
        <template slot='title' > 查看代码 </template>
        <template slot='body'> 
          <pre><code>{{this.code}}</code></pre>
        </template>
      </j-collapse>
    </div>
      `
        .replace(/\t+| |/g, "")
        .trim()
    };
  },
  methods: {
    showToast(position) {
      this.$toast("你好！！", {
        enableHtml: false,
        position: position,
        //回调
        closeButton: {
          text: "close",
          callback() {
            console.log("用户提前点击");
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.toastdemo {
  margin: 10px 0px;
}
</style>
