<template>
   <div class="carousel">
      <j-carousel :selectdot = 1>
        <template slot='content'>
          <j-carouselitem :dataid=1>
            <h3>1</h3>
          </j-carouselitem>
          <j-carouselitem :dataid=2>
            <h3>2</h3>
          </j-carouselitem>
          <j-carouselitem :dataid=3>
            <h3>3</h3>
          </j-carouselitem>
          <j-carouselitem :dataid=4>
            <h3>4</h3>
          </j-carouselitem>
        </template>
        <template slot="ctr">
          <j-carouselcontrol :dataid=1></j-carouselcontrol>
          <j-carouselcontrol :dataid=2></j-carouselcontrol>
          <j-carouselcontrol :dataid=3></j-carouselcontrol>
          <j-carouselcontrol :dataid=4></j-carouselcontrol>
        </template>
      </j-carousel>
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
import Collapse from "../../../src/collapse";
import Carousel from "../../../src/carousel";
import Carouselitem from "../../../src/carouselitem";
import Carouselcontrol from "../../../src/carouselcontrol";
export default {
  components: {
    "j-collapse": Collapse,
    "j-carousel": Carousel,
    "j-carouselitem": Carouselitem,
    "j-carouselcontrol": Carouselcontrol
  },
   data(){
      return {
        code:`<div class="carousel">
      <j-carousel :selectdot = 1>
        <template slot='content'>
          <j-carouselitem :dataid=1>
            <h3>1</h3>
          </j-carouselitem>
          <j-carouselitem :dataid=2>
            <h3>2</h3>
          </j-carouselitem>
          <j-carouselitem :dataid=3>
            <h3>3</h3>
          </j-carouselitem>
          <j-carouselitem :dataid=4>
            <h3>4</h3>
          </j-carouselitem>
        </template>
        <template slot="ctr">
          <j-carouselcontrol :dataid=1></j-carouselcontrol>
          <j-carouselcontrol :dataid=2></j-carouselcontrol>
          <j-carouselcontrol :dataid=3></j-carouselcontrol>
          <j-carouselcontrol :dataid=4></j-carouselcontrol>
        </template>
      </j-carousel>
    </div>`.replace(/\t+| |/g,'').trim()
      }

   }
};
</script>
<style lang="scss" scoped>
.carousel h3 {
  color: #fff;
}
</style>
