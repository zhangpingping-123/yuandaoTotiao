<!-- 用户登录框 -->
<template>
  <div class="toutiao-user">
    <div v-if="!userInfo.oauth_token" class="toutiao-user-content">
      <div class="content-text">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</div>
      <div class="userLogin-button" @click.stop="goToUserLogin">登录</div>
    </div>
    <div class="toutiao-user-login">
      <div class="logout" @click="logout">退出登录</div>
      <div class="imagerWraooer">
        <img :src="userInfo.avator" alt />
      </div>
      <div class="nickname">{{userInfo.nickname}}</div>
      <div class="bottom">
        <div class="left">
          <div class="count">{{userInfo.tt_count}}</div>
          <div class="text">头条数</div>
        </div>
        <div class="right">
          <div class="count">{{userInfo.article_count}}</div>
          <div class="text">文章数</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { UPDATE_USER_INFO } from "../../vuex/mutationsType";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    // 从 vuex 中 获取登陆的用户数据
    userInfo: function() {
      return this.$store.state.userInfo;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    logout: function() {
      this.$axios.post("/logout").then(res => {
        this.$message({
          msg: res.msg
        });
        // 清除本地的 userInfo = {} 信息
        // updateUserInfo
        this.$store.commit(UPDATE_USER_INFO, {});
      });
    },
    //点击登录按钮跳转到登录页面
    goToUserLogin: function() {
      //方法一:通过name跳转
      // this.$router.push("userLogin");
      // 方法二:通过路径跳转
      this.$router.push({
        path: "/userLogin"
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.toutiao-user {
  width: 350px;
  height: 250px;
  background-color: #f4f5f6;
  padding: 20px;
  .toutiao-user-content {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .content-text {
      font-size: 12px;
      text-align: center;
    }

    .userLogin-button {
      width: 240px;
      height: 40px;
      background-color: var(--themeColor);
      color: white;
      text-align: center;
      line-height: 40px;
      border-radius: 5px;
    }
  }
  .toutiao-user-login {
        width: 100%;
        background-color: white;
        padding: 10px;
        .logout {
        text-align: right;
        }

        .imagerWraooer {
            text-align: center;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }

        .nickname {
            text-align: center;
        }
    }

    .bottom {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        .left {
            flex:1;
            border-right: 1px solid #ddd;
            .count {
                 text-align: center;
            }

            .text {
                text-align: center;
                font-size: 16px;
            }
        }

      .right {
          flex:1;
            .count {
                text-align: center;
            }

            .text {
                 text-align: center;
                font-size: 16px;
            }

      }
    }
  
}
</style>