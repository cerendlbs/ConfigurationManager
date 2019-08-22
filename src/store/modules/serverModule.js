/* eslint-disable no-unused-vars */
import * as ACTION from '../constans/serveractions'
const state = {
  servers: []
}
const getters = {
  getdata (state) {
    return state.servers
  }
}
const mutations = {
  add (state, Data) {
    state.servers.push(Data)
  },
  set (state, Data) {
    state.servers = Data
  },
  delete (state, user) {
    state.servers = state.servers.filter(x => x.user !== user)
  },
  update (state, Data) {
    let _items = state.servers.filter(x => x.user !== Data.user)
    _items.push(Data)
    _items = _items.sort(function (a, b) { return a.user.localeCompare(b.user) })
    state.servers = _items
  }
}
const actions = {
  add ({ commit }, Data) {
    commit(ACTION.ACTION_SERVER_ADD, Data)
  },
  set ({ commit }, Data) {
    commit(ACTION.ACTION_SERVER_SET, Data)
  },
  delete ({ commit }, index) {
    commit(ACTION.ACTION_SERVER_DELETE, index)
  },
  update ({ commit }, Data) {
    commit(ACTION.ACTION_SERVER_UPDATE, Data)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
