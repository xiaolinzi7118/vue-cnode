<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button v-if="jduge1" @click="changeBtn" class="pagebtn">....</button>
    <button
      v-for="btn in pagebtns"
      :key="btn"
      :class="{ currentPage: btn === currentPage }"
      class="pagebtn"
      @click="changeBtn(btn)"
    >
      {{ btn }}
    </button>
    <button v-if="jduge2" class="pagebtn">....</button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "NavPage",
  data() {
    return {
      pagebtns: [1, 2, 3, 4, 5],
      currentPage: 1,
      jduge1: false,
      jduge2: true,
    };
  },
  methods: {
    changeBtn(page) {
      if (typeof page !== "number") {
        switch (page.target.innerText) {
          case "首页":
            (this.pagebtns = [1, 2, 3, 4, 5]), this.changeBtn(1);
            break;
          case "上一页":
            $(".currentPage").prev().click();
            break;
          case "下一页":
            $(".currentPage").next().click();
            break;
          default:
            break;
        }
        return;
      }
      this.currentPage = page;
      if (page > 4) {
        this.jduge1 = true;
      } else {
        this.jduge1 = false;
      }
      if (page === this.pagebtns[4]) {
        this.pagebtns.shift();
        this.pagebtns.splice(4, 0, this.pagebtns[3] + 1);
      } else if (page === this.pagebtns[0] && page != 1) {
        this.pagebtns.unshift(this.pagebtns[0] - 1);
        this.pagebtns.splice(5, 1);
      }
      this.$emit("handleList", this.currentPage);
    },
  },
};
</script>








<style  scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 50px;
  border-radius: 5px;
  /*box-shadow: 0px 2px 9px #888888;*/
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
  margin: 0 8px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>