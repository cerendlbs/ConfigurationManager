/* eslint-disable indent */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Database from '@/views/Database'
import Server from '@/views/Server'
import DatabaseCreate from '@/views/DatabaseCreate'
import EditTable from '@/views/EditTable'
import ServerCreate from '@/views/ServerCreate'
import ServerEdit from '@/views/ServerEdit'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Database',
      name: 'Database',
      component: Database
    },
    {
      path: '/Server',
      name: 'Server',
      component: Server
    },
    {
      path: '/DatabaseCreate',
      name: 'DatabaseCreate',
      component: DatabaseCreate

    },
    {
      path: '/EditTable/:id',
      name: 'EditTable',
      component: EditTable
    },
    {
      path: '/ServerCreate',
      name: 'ServerCreate',
      component: ServerCreate
    },
    {
      path: '/ServerEdit/:user',
      name: 'ServerEdit',
      component: ServerEdit
    }
  ]
})
