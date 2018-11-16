import api from '~/api'
import {setAuthToken, resetAuthToken} from '~/utils/auth'
import cookies from 'js-cookie'

const state = () => ({
  user: null
})

const getters = {
  user (state) {
    return state.user
  }
}

const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  RESET_USER (state) {
    state.user = null
  }
}

const actions = {
  fetch ({commit}) {
    return api.auth.me()
      .then(response => {
        commit('SET_USER', response.data.user)
        return response
      })
      .catch(error => {
        commit('RESET_USER')
        return error
      })
  },
  login ({commit}, data) {
    return api.auth.login(data)
      .then(response => {
        setAuthToken(response.data.token)
        cookies.set('x-access-token', response.data.token, {expires: 7})
        return response
      })
  },
  reset ({commit}) {
    commit('RESET_USER')
    resetAuthToken()
    cookies.remove('x-access-token')
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
