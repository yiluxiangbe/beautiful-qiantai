// 导入axios请求
import { reqUserList, addUser, deleteUser, updataUser } from '../../api/index'
// 导入mock虚拟请求

const state = {
  // 存放用户信息
  userList: {}
}
const mutations = {
  GETUSERLIST(state, userList) {
    state.userList = userList
  }
}
const actions = {
  // 这里面用来处理异步处理
  // 请求用户列表
  async getUserList({ commit, state, dispatch }, user) {
    const result = await reqUserList(user)
    commit('GETUSERLIST', result.data.data.records)
  },

  // 新增用户信息
  async insertUser({ commit, state, dispatch }, user) {
    const result = await addUser(user)
  },
  // 删除用户信息
  async deleteUser({ commit, state, dispatch }, id) {
    let user = { id: Number(id) }
    const result = await deleteUser(user)
  },
  // 修改用户信息
  async updataUser({ commit, state, dispatch }) {
    const result = await updataUser()
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
