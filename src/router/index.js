import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../components/Article.vue'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo.vue'
import SlideBar from "../components/SlideBar.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'root',
    components:{
      main:PostList
    }
  },
  {
    path: '/topic/:id&author=:name',
    name: 'post_content',
    components:{
      main:Article,
      slidebar:SlideBar
    }
  },
  {
    path:'/userinfo/:name',
    name:'user_info',
    components:{
      main:UserInfo,
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
