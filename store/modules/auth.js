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
  SET_AUTH (state, auth) {
    state.auth = auth
  },
  SET_TOKEN (state, token) {
    state.token = token
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
  }
}

const actions = {
  setAuth ({ commit }, auth) {
    commit('SET_AUTH', auth)
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  }
}

export var auth = {
  state,
  getters,
  mutations,
  actions
}
