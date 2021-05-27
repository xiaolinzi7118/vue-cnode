<template>
  <div class="autherinfo">
    <!-- 正在加载 -->
    <div class="loading" v-if="isLoading"></div>
    <div v-else>
      <div class="authersummay">
        <div class="topbar">作者</div>
        <div class="topbarImg">
          <router-link
            :to="{
              name: 'user_info',
              params: {
                name: userinfo.loginname,
              },
            }"
          >
            <img :src="userinfo.avatar_url" alt="" />
          </router-link>
          <router-link
            :to="{
              name: 'user_info',
              params: {
                name: userinfo.loginname,
              },
            }"
          >
            <span>{{ userinfo.loginname }}</span>
          </router-link>
        </div>
      </div>
      <div class="recent_topics">
        <div class="topbar">作者最近主题</div>
        <ul>
          <li
            v-for="list in (userinfo.recent_topics || []).slice(0, 5)"
            :key="list.id"
          >
            <router-link
              :to="{
                name: 'post_content',
                params: {
                  id: list.id,
                  name: list.author.loginname,
                },
              }"
            >
              {{ list.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="recent_replies">
        <div class="topbar">作者最近回复</div>
        <ul>
          <li
            v-for="list in (userinfo.recent_replies || []).slice(0, 5)"
            :key="list.id"
          >
            <router-link
              :to="{
                name: 'post_content',
                params: {
                  id: list.id,
                  name: list.author.loginname,
                },
              }"
            >
              {{ list.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "SlideBar",
  props: {
    userinfo: {
      type: Object,
      default() {
        return {};
      },
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>










<style scoped>
.authersummay,
.recent_replies,
.recent_topics {
  background-color: #fff;
}
.autherinfo {
  width: 328px;
  display: flex;
  flex-flow: column;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 32px;
  line-height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.topbarImg {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}
span {
  display: inline-block;
  height: 48px;
  line-height: 68px;
  font-size: 16px;
  color: #666;
  text-decoration: none;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}
</style>