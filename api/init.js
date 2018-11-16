import axios from 'axios'
import {baseURL} from '~/config/dev.env.js'
import cookies from 'js-cookie'
import {setAuthToken, resetAuthToken} from '~/utils/auth'

axios.defaults.baseURL = baseURL

const token = cookies.get('x-access-token')

if (token) setAuthToken(token)
else resetAuthToken()