<template>
  <div id="app">
    <Header></Header>
    <div class="main">
    <router-view name="slidebar"></router-view>
    <router-view name="main" :key="key"></router-view>
    </div>
  </div>
</template>

<script>
// import PostList from './components/PostList'
import Header from './components/Header'
export default{
  name:'App',
  components:{
    Header
  },
  computed:{
    key() {
      //复用的时候，监测路由变化
      return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
  }
}
</script>
 

<style lang="scss">
@import url('assets/style/reset.css');
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
