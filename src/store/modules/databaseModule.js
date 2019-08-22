import * as ACTION from '../constans/actions'
const state = {
  databases: []
}
const getters = {
  getdata (state) {
    return state.databases
  }
}
const mutations = {
  add (state, data) {
    state.databases.push(data)
  },
  set (state, data) {
    state.databases = data
  },
  delete (state, name) {
    state.databases = state.databases.filter(x => x.name !== name)
  },
  update (state, data, name) {
    let _items = state.databases.filter(x => x.name !== data.name)
    _items.push(data)
    _items = _items.sort(function (a, b) { return a.name.localeCompare(b.name) })
    state.databases = _items
  },
  pass (state, name) {
    state.database = state.databases.filter(x => x.name === name)[0]
  }
}
const actions = {
  add ({ commit }, data) {
    commit(ACTION.ACTION_DATABASE_ADD, data)
  },
  set ({commit}, data) {
    commit(ACTION.ACTION_DATABASE_SET, data)
  },
  delete ({ commit }, index) {
    commit(ACTION.ACTION_DATABASE_DELETE, index)
  },
  update ({ commit }, data) {
    commit(ACTION.ACTION_DATABASE_UPDATE, data, name)
  },
  pass ({commit}, index) {
    commit(ACTION.ACTION_DATABASE_PASS, index)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
