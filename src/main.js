import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './style/index.less'
// 加载vant
import Vant from 'vant';
// 加载vant样式
import 'vant/lib/index.css';
// 注册vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
