import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth'
import { profile } from './modules/profile'
import { template } from './modules/template'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
      profile,
      template
    }
  })
}

export default store