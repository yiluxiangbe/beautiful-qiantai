// 导入axios请求
import { reqShopCataList, insertShopCata, deleteShopCata } from '../../api/index'
// 导入mock虚拟请求

const state = {
  // 存放商品分类信息
  shopCatagoryList: {}
}
const mutations = {
  GETSHOPCATA(state, shopCatagoryList) {
    state.shopCatagoryList = shopCatagoryList
  }
}
const actions = {
  // 这里面用来处理异步处理
  // 请求商品分类列表
  async getShopcata({ commit, state, dispatch }, cata) {
    const result = await reqShopCataList(cata)
    commit('GETSHOPCATA', result.data.data.records)
  },

  // 新增商品分类信息
  async insertShopCata({ commit, state, dispatch }, shopCata) {
    const result = await insertShopCata(shopCata)
  },
  // 删除商品分类信息
  async deleteShopList({ commit, state, dispatch }, id) {
    let user = { id: Number(id) }
    const result = await deleteShopCata(user)
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
