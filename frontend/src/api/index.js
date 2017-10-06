import axios from 'axios'

var api = axios.create({
  baseURL: '/api'
})

export default api
