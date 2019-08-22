import Axios from 'axios'
import { BASE_URL } from '@api/config'

const serversApi = {
  getAll () {
    return Axios({ url: `${BASE_URL}/servers/getall`, method: 'GET' }).then(res => res.Data)
  },
  get (id) {
    return Axios({ url: `${BASE_URL}/servers/get`, method: 'GET', params: { id: id } }).then(res => res.Data)
  },
  add (servers) {
    return Axios({ url: `${BASE_URL}/servers/add`, data: servers, method: 'POST' }).then(res => res.Data)
  },
  update (servers) {
    return Axios({ url: `${BASE_URL}/servers/update`, data: servers, method: 'POST' }).then(res => res.Data)
  },
  delete (id) {
    return Axios({ url: `${BASE_URL}/servers/delete`, method: 'POST', params: {id: id} }).then(res => res.Data)
  }
}

export default serversApi
