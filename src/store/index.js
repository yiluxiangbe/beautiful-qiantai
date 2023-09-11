import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/index'
import shopList from './shopList/index'
import shopCart from './shopCart/index'
import shopCatagory from './shopCatagory/index'
import page from './page/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shopCart,
    shopCatagory,
    shopList,
    page
  }
})
