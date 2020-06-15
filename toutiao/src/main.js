import Vue from 'vue'
import App from './App.vue'
//引入自定义的请求库
import axios from "./common/axios"
//引入自定义消息控件
import { Message } from "./common/utils"

Vue.prototype.$axios = axios;
//挂在到vue原型上
Vue.prototype.$message = Message;
//引入路由配置信息
import router from "./router"
//引入vuex
import store from "./vuex/store"
Vue.config.productionTip = false

new Vue({
  //配置理由信息
  router,
  store,
  render: h => h(App),
}).$mount('#app')
