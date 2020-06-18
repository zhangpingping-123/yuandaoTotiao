<!-- 文章内容 -->
<template>
  <div class="tt-article-detail">
    <!-- 文章头部开始 -->
    <div class="article-detail-header"></div>
    <!-- 文章头部结束 -->
    <!-- 文章內容开始 -->
    <div class="article-detail-content">
      <div class="article-detail-left">左侧导航</div>
      <div class="article-detail-middle">
        <h2>{{articles.title}}</h2>
        <div class="article-date">
          <div class="nickname">{{articles.nickname}}</div>
          <div class="date">{{articles.date}}</div>
        </div>
        <div class="article-text" v-html="articles.content"></div>
      </div>
      <div class="article-detail-right">用户信息</div>
    </div>
    <!-- 文章内容结束 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      articles: {
        nid:"",
        title:"",
        nickname:"",
        date:"",
        content:"",
      },
      // nid:0,
      // nickname:"",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //获取文章数据
    console.log(this.$router);
    let nid = this.$router.history.current.query.nid;
    console.log(nid);
    this.$axios.post("/getArticleById", {
        nid: nid
      })
      .then(res => {
        console.log(res);
        this.articles = res.article;
        this.articles.nid = res.article.nid;
        this.articles.title = res.article.title   
        this.articles.nickname = res.article.n_user.nickname
        this.articles.date = res.article.created_at
        this.articles.content = res.article.content
      });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.tt-article-detail {
  .article-detail-content {
    display: flex;
    padding: 20px;
    .article-detail-left {
      flex: 2;
      background-color: #ddd;
    }

    .article-detail-middle {
      flex: 6;
    }

    .article-detail-right {
      flex: 2;
      background-color: blanchedalmond;
    }
  }
}
</style>