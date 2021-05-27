<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>
    <!-- 主题帖子列表 -->
    <div v-else class="posts">
      <ul>
        <li>
          <div class="toobar">
            <span
              v-for="(tab, index) in tabs"
              :key="index"
              @click="changeToobar(tab)"
              :class="{ currentTab: type === tab.name }"
            >
              {{ tab.value }}
            </span>
          </div>
        </li>
        <li v-for="post in posts" :key="post.id">
          <!-- 头像 -->
          <img :src="post.author.avatar_url" alt="" />
          <!-- 回复/浏览 -->
          <span>
            <span class="reply_count"> {{ post.reply_count }}</span>
            /{{ post.visit_count }}
          </span>
          <!-- 帖子的分类 -->
          <span
            :class="{
              put_good: post.good,
              put_top: post.top,
              'topiclist-tab': post.good != true && post.top != true,
            }"
          >
            <span>
              {{ post | tabFormatter }}
            </span>
          </span>
          <!-- 标题 -->
          <router-link
            :to="{
              name: 'post_content',
              params: {
                id: post.id,
                name: post.author.loginname,
              },
            }"
          >
            <span>
              {{ post.title }}
            </span>
          </router-link>
          <!-- 最终回复时间 -->
          <span class="last_reply">
            {{ post.last_reply_at | formatDate }}
          </span>
        </li>
        <li>
          <NavPage @handleList="renderList"></NavPage>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavPage from "./NavPage";
export default {
  name: "PostList",
  components: {
    NavPage,
  },
  data() {
    return {
      tabs: [
        {
          name: "all",
          value: "全部",
        },
        {
          name: "good",
          value: "精华",
        },
        {
          name: "share",
          value: "分享",
        },
        {
          name: "ask",
          value: "问答",
        },
        {
          name: "job",
          value: "招聘",
        },
      ],
      isLoading: false,
      posts: [],
      postpage: 1,
      initRes: [],
      type: "all",
    };
  },
  methods: {
    getData(tab) {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.postpage,
            limit: 20,
            tab,
          },
        })
        .then((res) => {
          this.isLoading = false;
          this.posts = res.data.data;
          this.initRes = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    renderList(value) {
      this.postpage = value;
      this.getData(this.type);
    },
    changeToobar(tab) {
      const _tab = tab.name || "all";
      this.getData(_tab);
      this.type = _tab;
    },
  },
  beforeMount() {
    this.isLoading = true;
    this.getData();
  },
};
</script>


<style lang="scss" scoped>
.posts {
  margin-top: 20px;
}

.PostList img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
}

ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
}

.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
}

.toobar .currentTab {
  background-color: #80bd01;
  color: white;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  padding-top: 300px;
}
</style>
