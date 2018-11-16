import axios from 'axios'
export default {
  auth: {
    me: () => axios.get('http://localhost:5000/user/get/5b49d96a7f89b4066c859825'),
    login: (data) => axios.post('http://localhost:5000/user/login', data)
  }
}