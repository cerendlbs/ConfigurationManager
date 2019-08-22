import Vue from 'vue'
import Vuex from 'vuex'
import databaseModule from './modules/databaseModule'
import serverModule from './modules/serverModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    databaseModule,
    serverModule
  }
})
