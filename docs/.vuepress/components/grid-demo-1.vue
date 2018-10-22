<template>
   <div class="grid">
      <j-row>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
    </j-row>
    <j-row>
        <j-col span="6">
          <div class="demoCol">6</div>
        </j-col>
        <j-col span="6">
          <div class="demoCol">6</div>
        </j-col>
        <j-col span="6">
          <div class="demoCol">6</div>
        </j-col>
        <j-col span="6">
            <div class="demoCol">6</div>
          </j-col>
      </j-row>
      <j-row>
          <j-col span="2">
            <div class="demoCol">2</div>
          </j-col>
          <j-col span="4">
            <div class="demoCol">4</div>
          </j-col>
          <j-col span="6">
            <div class="demoCol">6</div>
          </j-col>
          <j-col span="12">
              <div class="demoCol">12</div>
            </j-col>
        </j-row>
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
import Row from "../../../src/row";
import Col from "../../../src/col";
import Collapse from "../../../src/collapse";

export default {
  components:{
    'j-col': Col,
    'j-row': Row,
    'j-collapse':Collapse,
  },
  data(){
    return {
      code:`<div class="grid">
      <j-row>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
    </j-row>
    <j-row>
        <j-col span="6">
          <div class="demoCol">6</div>
        </j-col>
        <j-col span="6">
          <div class="demoCol">6</div>
        </j-col>
        <j-col span="6">
          <div class="demoCol">6</div>
        </j-col>
        <j-col span="6">
            <div class="demoCol">6</div>
          </j-col>
      </j-row>
      <j-row>
          <j-col span="2">
            <div class="demoCol">2</div>
          </j-col>
          <j-col span="4">
            <div class="demoCol">4</div>
          </j-col>
          <j-col span="6">
            <div class="demoCol">6</div>
          </j-col>
          <j-col span="12">
              <div class="demoCol">12</div>
            </j-col>
        </j-row>
    <div class="collapsedemo">
      <j-collapse>
        <template slot='title' > 查看代码 </template>
        <template slot='body'> 
          <pre><code>{{this.code}}</code></pre>
        </template>
      </j-collapse>
    </div>
      </div>`.replace(/\t+| |/g,'').trim()
    }
  }
}
</script>
<style lang="scss" scoped>
.grid{
    margin: 20px 0;
}
.demoCol{
  border: 1px solid #ccc;
    background: #3b86ff;
    height: 50px;
    color: #fff;
    align-items: center
 }
</style>
