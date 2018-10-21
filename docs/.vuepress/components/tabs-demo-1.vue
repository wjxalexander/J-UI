<template>
<div class="tabsdemo">
  <div class="tabs">
     <j-tab currenttab='education'>
        <j-tabnav >
          <j-tabitem name=finace title="财经">Tab1</j-tabitem>
          <j-tabitem name=sport title="体育">Tab2</j-tabitem>
          <j-tabitem name=education title="教育">Tab3</j-tabitem>
        </j-tabnav>
        <j-tabbody> 
          <j-tabpannel name=finace>  
            <template slot='content'> 
              <div>Content of Tab Pane 1</div>
            </template>
          </j-tabpannel>
        <j-tabpannel name=sport> 
           <template slot='content'> 
            <div>Content of Tab Pane 2</div>
           </template>
        </j-tabpannel>
         <j-tabpannel name=education> 
          <template slot='content'> 
            <div>Content of Tab Pane 3</div>
          </template>
        </j-tabpannel>
        </j-tabbody>
      </j-tab>
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
import Tab from ".../../../src/tab";
import TabNav from "../../../src/tabnav";
import Tabitem from "../../../src/tabitem";
import Tabpanel from "../../../src/tabpanel";
import Tabbody from "../../../src/tabbody";
import Collapse from "../../../src/collapse";
export default {
  components: {
    "j-tab": Tab,
    "j-tabnav": TabNav,
    "j-tabitem": Tabitem,
    "j-tabpannel": Tabpanel,
    "j-tabbody": Tabbody,
    "j-collapse": Collapse
  },
  data() {
    return {
      currentTab: "finace",
      code: `
      <js>:
      data(){
        return {
           currentTab: "finace",
        }
      }
      }
      <HTML>:
       <j-tab currenttab='education'>
        <j-tabnav >
          <j-tabitem name=finace title="财经">Tab1</j-tabitem>
          <j-tabitem name=sport title="体育">Tab2</j-tabitem>
          <j-tabitem name=education title="教育">Tab3</j-tabitem>
        </j-tabnav>
        <j-tabbody> 
          <j-tabpannel name=finace>  
            <template slot='content'> 
              <div>财经新闻</div>
            </template>
          </j-tabpannel>
        <j-tabpannel name=sport> 
           <template slot='content'> 
            <div>体育新闻</div>
           </template>
        </j-tabpannel>
        <j-tabpannel name=education> 
          <template slot='content'> 
            <div>教育新闻</div>
          </template>
        </j-tabpannel>
        </j-tabbody>
      </j-tab>
      `
        .replace(/^ {6}/gm, "")
        .trim()
    };
  }
};
</script>
<style lang="scss" scoped>
.tabsdemo{
  margin: 1.3em 0;
}

</style>
