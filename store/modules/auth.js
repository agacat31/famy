import api from '~/api'
import {setAuthToken, resetAuthToken} from '~/utils/auth'

const state = () => ({
  authData: null
})

const getters = {
  authData (state) {
    return state.authData
  }
}

const mutations = {
  SET_AUTH (state, data) {
    state.authData = data
  },
  RESET_AUTH (state) {
    state.authData = null
  }
}

const actions = {
  setToken ({commit}, token) {
    commit('SET_AUTH', {token: token})
  },
  login ({commit}, data) {
    return api.auth.login(data)
      .then(response => {
        commit('SET_AUTH', {token: response.data.token})
        setAuthToken(response.data.token)
        this.$cookiz.set('x-access-token', response.data.token, {maxAge: 60 * 5})
        return response
      })
      .catch(error => {
        commit('RESET_AUTH')
        return error
      })
  },
  reset ({commit}) {
    commit('RESET_AUTH')
    resetAuthToken()
    this.$cookiz.removeAll()
    return Promise.resolve()
  }
}

export var auth = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
