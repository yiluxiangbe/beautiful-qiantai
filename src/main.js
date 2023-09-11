import Vue from 'vue'
import App from './App.vue'

// 导入luyou
import router from '@/router/index.js'
// 引入全局组件，这里是网站的头部和尾部
import Head from './page/head/index.vue'
import Trail from './page/trail/index.vue'
import Nav from './page/nav/index.vue'
// 导入admin页面的全局组件
import AdminHead from '@/components/admin/page/head/index.vue'
import AdminNav from '@/components/admin/page/nav/index.vue'
import store from './store/index'

// 导入json文件
// 引入mockserve.js进行数据模拟，这里直接引入就行，执行一遍这个文件就行
import '@/mock/mockServe.js'
Vue.component(Head.name, Head)
Vue.component(Trail.name, Trail)
Vue.component(Nav.name, Nav)
Vue.component(AdminHead.name, AdminHead)
Vue.component(AdminNav.name, AdminNav)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
