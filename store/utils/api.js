import axios from 'axios'
import store from '@/store'

axios.defaults.headers.common.Authorization = 'Bearer ' + store.getters.token
axios.defaults.baseURL = process.env.API_BASE_URL

const REQUEST_TOKEN_URL = 'user/login'

export function login(credentials) {
  return axios.post(REQUEST_TOKEN_URL, {
    email: credentials.email,
    password: credentials.password
  })
}