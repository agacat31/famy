import axios from 'axios'

const state = () => ({
  auth: false,
  token: null
})

const getters = {
  auth (state) {
    return state.auth
  },
  token (state) {
    return state.token
  }
}

const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  setToken (state, token) {
    state.token = token
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
  }
}

const actions = {
  actAuth ({ commit }, auth) {
    commit('setAuth', auth)
  },
  actToken ({ commit }, token) {
    commit('setToken', token)
  }
}

export var auth = {
  state,
  getters,
  mutations,
  actions
}
