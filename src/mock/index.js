import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { databases, servers } from '@/mock/data'

let _databases = databases
let _servers = servers

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)
  }
}
