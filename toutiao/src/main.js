import Vue from 'vue'
import App from './App.vue'

//引入路由配置信息
import router from "./router"
Vue.config.productionTip = false

new Vue({
  //配置理由信息
  router,
  render: h => h(App),
}).$mount('#app')
