import Vue from 'vue'
import Router from 'vue-router'
import BaiduMap from 'vue-baidu-map'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(BaiduMap, {
  ak: 'GBGNbNyCEePZ3WncU8gaQQpcowYZUIvz'
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
