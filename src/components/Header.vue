<template>
  <div>
    <div class='header'>
      <router-link :to="{name:'root'}">
      <img src="../assets/cnodejs_light.svg">
      </router-link>
      <ul>
        <router-link :to="{name:'root'}">
          <li><a href="#">首页</a></li>
        </router-link>
      <li><a href="https://github.com/xiaolinzi7118">关于作者</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  name:'Header'
}
</script>

<style lang="scss" scoped>
.header{
  background-color:#5a5555 ;
  height: 50px;
}
img{
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
  ul{
    list-style: none;
    float: right;
    margin: 4px 30px;
  }
  li{
    display: inline-block;
    padding: 10px 15px;
  }
  a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    text-shadow: none;
  }

</style>
