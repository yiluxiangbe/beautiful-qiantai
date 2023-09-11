// 导入axios请求
import { reqShopCartList, insertShopCart, deleteShopCart, updataShopCart } from '../../api/index'
// 导入mock虚拟请求

const state = {
  // 存放购物车信息
  shopCartList: {}
}
const mutations = {
  GETSHOPCATA(state, shopCartList) {
    state.shopCartList = shopCartList
  }
}
const actions = {
  // 这里面用来处理异步处理
  // 请求商品分类列表
  async getShopCart({ commit, state, dispatch }, id) {
    console.log(id)
    let cart = { id: id }
    const result = await reqShopCartList(cart)
    commit('GETSHOPCATA', result.data.data)
  },

  // 新增商品分类信息
  async insertShopCart({ commit, state, dispatch }, cart) {
    const result = await insertShopCart(cart)
  },
  // 删除商品分类信息
  async deleteShopCart({ commit, state, dispatch }, id) {
    let user = { id: id }
    const result = await deleteShopCart(user)
  },
  // 修改商品分类信息
  async updataShopCart({ commit, state, dispatch }, cart) {
    const result = await updataShopCart(cart)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
