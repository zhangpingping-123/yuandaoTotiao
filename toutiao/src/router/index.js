//引入Vue
import Vue from "vue"
//引入路由组件
import VueRouter from "vue-router"
//使用VueRouter
Vue.use(VueRouter)
//引入组件
import Index from "../components/Index"
//理由配置文件
let routes = [{
    path:"/",
    name:"index",
    component:Index
}]
//新建一个VueRouter实例,将routes作为参数传进,同时将路由导出
export default new VueRouter({
    routes
})