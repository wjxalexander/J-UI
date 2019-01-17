<template>
  <div class="pagination">
    <span class="iconctr left" @click="decrease">
      <j-icon class="icon left" name="left"></j-icon>
    </span>
    <ul class="items">
      <li
        v-for="(value,index) in displayArr"
        @click="choosePage(value,index)"
        :class="{active: isActive(value)}"
        ref="page"
      >{{value}}</li>
    </ul>
    <span class="iconctr right" @click="increase">
      <j-icon class="icon right" name="right"></j-icon>
    </span>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "pagination",
  components: {
    "j-icon": Icon
  },
  props: {
    total: {
      type: Number
    }
  },
  data() {
    return {
      pageArr: [],
      currentPage: 1,
      pages: this.total
    };
  },
  mounted() {
    for (let i = 1; i < 50; i++) {
      this.pageArr.push(i);
    }
  },
  methods: {
    choosePage(value, index) {
      if (value !== "...") {
        this.currentPage = value;
      } else {
        if (index === 1) {
          this.currentPage -= 5;
        } else {
          this.currentPage += 5;
        }
      }
    },
    isActive(value) {
      return value === this.currentPage ? true : false;
    },
    increase() {
      this.currentPage++;
      if (this.currentPage > this.pages) {
        this.currentPage = this.pages;
      }
    },
    decrease() {
      this.currentPage--;
      if (this.currentPage < 1) {
        this.currentPage = 1;
      }
    }
  },
  computed: {
    displayArr() {
      let currIdx = this.currentPage;
      const lastpage = this.pages;
      let displayArr = [];
      if (currIdx < 4) {
        displayArr = [1, 2, 3, 4, "...", lastpage];
      } else if (currIdx === 4) {
        displayArr = [1, 2, 3, 4, 5, "...", lastpage];
      } else if (currIdx > 4 && currIdx <= lastpage - 4) {
        displayArr = [
          1,
          "...",
          currIdx - 1,
          currIdx,
          currIdx + 1,
          "...",
          lastpage
        ];
      } else {
        displayArr = [
          1,
          "...",
          lastpage - 4,
          lastpage - 3,
          lastpage - 2,
          lastpage - 1,
          lastpage
        ];
      }
      return displayArr;
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.pagination {
  $border-color: #d9d9d9;
  $height: 32px;
  $active-color: #1890ff;
  $active-font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: flex-start;
  @mixin border-style {
    border: 1px solid $border-color;
    border-radius: 15%;
    margin-right: 8px;
    cursor: pointer;
  }

  & .icon {
    height: $height;
    width: $height;
    @include border-style;
    &:hover {
      fill: $active-color;
      border-color: $active-color;
      font-weight: $active-font-weight;
    }
  }
  & ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  & li {
    list-style: none;
    display: inline-block;
    font-size: 14px;
    text-align: center;
    padding: 3px 7px;
    height: $height;
    min-width: $height;
    @include border-style;
    &.active {
      color: $active-color;
      border-color: $active-color;
      font-weight: $active-font-weight;
    }
  }
}
</style>
