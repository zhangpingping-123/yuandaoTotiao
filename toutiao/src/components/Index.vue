<!--  -->
<template>
<div class='toutiao-index'>
    <!-- 头部导航栏开始 -->
    <div class="herder">
        <Header></Header>
    </div>
    <!-- 头部导航栏结束 -->
    <!--内容部分开始 -->
    <div class="toutiao-content">
        <!-- 左侧导航栏开始 -->
        <div class="left">
            <Nav></Nav>
        </div>
        <!-- 左侧导航栏结束 -->
        <div class="middle">
            <!-- 发布框开始 -->
            <Post></Post>
            <!-- 发布框结束 -->
        </div>
        <div class="right">
            <!-- 搜索框开始 -->
            <div class="toutiao-search">
                <SearchInput></SearchInput>
            </div>
            <!-- 搜索框结束 -->
            <!-- 用户信息/用户登录开始 -->
            <div class="toutiao-user">
                <Login></Login>
            </div>
            <!-- 用户信息/用户登录结束 -->
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//引入header组件
import Header from "../components/herder/Header"
//引入nav组件
import Nav from "../components/nav/Nav"
//引入搜索框组件
import SearchInput from "../components/login/SearchInput"
//引入用户登录框组件
import Login from "../components/login/Login"
//引入发布框组件
import Post from "../components/post/Post"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header,
    Nav,
    SearchInput,
    Login,
    Post,
},
data() {
//这里存放数据
return {

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
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
    .toutiao-index{
        width: 100%;
       .toutiao-content {
           width: 100%;
           padding: 10px 8% 0px 8%;
           border: 1px solid #ddd;
           display: flex;
            .left {
               width: 200px;

            }

            .middle {
                flex: 1;
            }

            .right {
                width: 350px;
                padding: 0 20px;

                .toutiao-user {
                    margin-top: 10px;
                }
            }
        } 
    }
</style>