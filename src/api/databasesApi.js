import Axios from 'axios'
import { BASE_URL } from '@api/config'

const databasesApi = {
  getAll () {
    return Axios({url: `${BASE_URL}/databases/getall`, method: 'GET'}).then(res => res.data)
  },
  get (id) {
    return Axios({ url: `${BASE_URL}/databases/get`, method: 'GET', params: { id: id } }).then(res => res.data)
  },
  add (databases) {
    return Axios({ url: `${BASE_URL}/databses/add`, data: databases, method: 'POST' }).then(res => res.data)
  },
  update (databases) {
    return Axios({ url: `${BASE_URL}/databases/update`, data: databases, method: 'post' }).then(res => res.data)
  },
  delete (id) {
    return Axios({ url: `${BASE_URL}/databases/delete`, method: 'POST', params: { id: id } }).then(res => res.data)
  }
}

export default databasesApi
