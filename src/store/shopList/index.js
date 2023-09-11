// 导入axios请求
import { reqShopList, insertShopList, deleteShopList } from '../../api/index'
import { download } from '../../api/index'
// 导入mock虚拟请求

const state = {
  // 存放商品信息
  //
  shopList1: {},
  shopList2: {},
  shopList3: {},
  shopList4: {},
  image: ''
}
const mutations = {
  GETSHOPLIST1(state, shopList1) {
    state.shopList1 = shopList1
  },
  GETSHOPLIST2(state, shopList2) {
    state.shopList2 = shopList2
  },
  GETSHOPLIST3(state, shopList3) {
    state.shopList3 = shopList3
  },
  GETSHOPLIST4(state, shopList4) {
    state.shopList4 = shopList4
  },
  GETSHOPIMAGE(state, image) {
    state.image = image
  }
}
const actions = {
  // 这里面用来处理异步处理
  // 请求商品列表
  async getShopList({ commit, state, dispatch }, shopList) {
    console.log(1111)
    console.log(shopList.currentPage)
    const result = await reqShopList(shopList)
    // 判断展示的是那个商品分类
    if (shopList.currentPage === 1) {
      commit('GETSHOPLIST1', result.data.data.records)
    }
    if (shopList.currentPage === 2) {
      commit('GETSHOPLIST2', result.data.data.records)
    }
    if (shopList.currentPage === 3) {
      commit('GETSHOPLIST3', result.data.data.records)
    }
    if (shopList.currentPage === 4) {
      commit('GETSHOPLIST4', result.data.data.records)
    }
  },

  // 新增商品信息
  async insertShopList({ commit, state, dispatch }, shop) {
    const result = await insertShopList(shop)
  },
  // 删除商品信息
  async deleteShopList({ commit, state, dispatch }, id) {
    let shop = { id: Number(id) }
    const result = await deleteShopList(shop)
  },
  // 修改商品信息
  async updataShopList({ commit, state, dispatch }) {
    const result = await updataShopList()
  },
  // 获取商品图片
  async download({ commit, state, dispatch }, name) {
    const result = await download(name)
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
