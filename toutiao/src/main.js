import Vue from 'vue'
import App from './App.vue'
//引入自定义的请求库
import axios from "./common/axios"
Vue.prototype.$axios = axios;
//引入路由配置信息
import router from "./router"
Vue.config.productionTip = false

new Vue({
  //配置理由信息
  router,
  render: h => h(App),
}).$mount('#app')
