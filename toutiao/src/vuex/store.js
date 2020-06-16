//引入vue
import Vue from "vue"
//引入vuex
import Vuex from "vuex"
import { UPDATE_USER_INFO } from "./mutationsType"

//在vue中使用Vuex
Vue.use(Vuex);
let storageKey = "userInfo";
//开始配置
const state = {
    userInfo:JSON.parse(localStorage.getItem(storageKey))||{}//用户信息

}
const mutations = {
    //更新用户信息
    [UPDATE_USER_INFO]:function(state,userInfo){
        localStorage.setItem(storageKey,JSON.stringify(userInfo));
        state.userInfo = userInfo
    }
}
//配置state mutations 到store中
export default new Vuex.Store({
    state,mutations
})