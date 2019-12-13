import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BaiduMap from 'vue-baidu-map'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import leftNavBar from '../components/leftNavBar'

Vue.use(Router)
Vue.use(leftNavBar)
Vue.use(BootstrapVue)
Vue.use(BaiduMap, {
  ak: 'GBGNbNyCEePZ3WncU8gaQQpcowYZUIvz'
})


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/',
      name: 'leftNavBar',
      component: leftNavBar
    }
  ]
})
