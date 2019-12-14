// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import leftNavBar from './components/leftNavBar'

Vue.use(leftNavBar)
Vue.use(BootstrapVue)
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'GBGNbNyCEePZ3WncU8gaQQpcowYZUIvz'
})

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { 
    App,
    leftNavBar
  },
  template: '<App/>'
})
