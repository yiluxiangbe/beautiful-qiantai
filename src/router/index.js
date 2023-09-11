// 导入组件
import Home from '@/components/Index.vue'
import Login from '@/components/login/index.vue'
import Register from '@/components/register/index.vue'
import ReadMoreShop from '@/components/readMoreShop/index.vue'
import ShopMessage from '@/components/shopMessage/index.vue'
import AdminHome from '@/components/admin/component/home/index.vue'
import Shop from '@/components/shop/index.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入数组，控制路由
import { arrRouter } from './arr'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/shopmessage', component: ShopMessage },
    { path: '/readmoreshop', component: ReadMoreShop, name: 'readmoreshop' },
    { path: '/shop', component: Shop },
    { path: '/admin/home', component: AdminHome }
  ]
})

// 路由守卫
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // arrRouter.indexOf(to.path)这个方法就是在arrRouter数组中查询to.path，并且返回索引值
  if (arrRouter.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    // 如果有token就登录
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
