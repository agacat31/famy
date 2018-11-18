import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth'
import { profile } from './modules/profile'
import { template } from './modules/template'
import {setAuthToken, resetAuthToken} from '~/utils/auth'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
      profile,
      template
    },
    actions: {
      nuxtServerInit ({dispatch}, context) {
        return new Promise((resolve, reject) => {
          const cookies = this.$cookiz.getAll()
          if (cookies.hasOwnProperty('x-access-token')) {
            setAuthToken(cookies['x-access-token'])
            dispatch('auth/fetch')
              .then(result => {
                resolve(true)
              })
              .catch(error => {
                console.log('Provided token is invalid:', error)
                resetAuthToken()
                resolve(false)
              })
          } else {
            resetAuthToken()
            resolve(false)
          }
        })
      },
    }
  })
}

export default store