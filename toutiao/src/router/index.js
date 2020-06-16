//引入Vue
import Vue from "vue"
//引入路由组件
import VueRouter from "vue-router"
//使用VueRouter
Vue.use(VueRouter)
//引入组件
import Index from "../components/Index"
import UserLogin from "../components/login/UserLogin.vue"
import UserRegister from "../components/login/UserRegister.vue"
import newsDetail from "../components/news/NewsDetail.vue"
//理由配置文件
let routes = [{
    path:"/",
    name:"index",
    component:Index
},{
    path:"/userLogin",
    name:"userLogin",
    component:UserLogin
},{
    path:"/userRegister",
    name:"userRegister",
    component:UserRegister
},{
    path:"/newsDetail",
    name:"newsDetail",
    component:newsDetail 
}]
//新建一个VueRouter实例,将routes作为参数传进,同时将路由导出
export default new VueRouter({
    routes
})