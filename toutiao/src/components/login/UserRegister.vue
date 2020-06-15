<!-- 注册页面 -->
<template>
  <div class>
    <div class="login-box">
      <div class="login-title">账号注册</div>
      <input v-model="username" type="text" placeholder="userName :" />
      <input v-model="password" type="password" placeholder="password :" />
      <div class="ligin-confirm" @click.stop="confirm">确定</div>
      <div class="bottom">
        <div class="left">
          登录/注册即表示你同意
          <a href="#">用户协议</a>和
          <a href="#">隐私条款</a>
        </div>
        <div class="right">
          <a href="#" @click.prevent.stop="goToUserLogin">登录</a>
        </div>
      </div>
    </div>
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
        username:"",
        password:""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      //跳转到登录页面
      goToUserLogin:function(){
        this.$router.push({
              name:"userLogin"
          })
      },
      confirm:function(){
          //获取输入框的值
          let password = this.password;
          let username = this.username;
          //账号密码为空的情况向提示用户信息不能为空
            if(!password||!username){
                this.$message({
                    msg:"账号或者密码不能为空 !"
                })
            }
            //发送登录后信息返给后台
            this.$axios.post("/createUser",{
                username,
                password
            })
            .then(res =>{
                this.$message({
                    msg:res.msg
                })
                if(res.status ===0){
                    //登录成功 
                    //将用户信息保存到localStorege
                    //用户信息 使用Vuex存
                    // this.$store.commit("updateUserInfo",res.wdata)
                    this.$router.push({"name":"userLogin"});//跳转回首页
                }
            })
            .catch(err =>err)
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
.login-box {
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  .login-title {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  input {
    height: 40px;
    width: 100%;
    margin-top: 10px;
    border: 1px solid #ddd;
  }

  .ligin-confirm {
    width: 100%;
    height: 40px;
    color: white;
    background-color: var(--themeColor);
    margin-top: 10px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
  }

  .bottom {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    margin-top: 10px;
    .left {
      a {
        color: skyblue;
      }
    }

    .right {
      a {
        color: skyblue;
      }
    }
  }
}
</style>