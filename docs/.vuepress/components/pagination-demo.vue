<template>
  <div class="demo">
    <j-pagination :total="30"></j-pagination>
  </div>
</template>
<script>
import Pagination from "../../../src/Pagination";
export default {
  components: {
    "j-pagination": Pagination
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.demo{
  padding-top: 15px
}
</style>

