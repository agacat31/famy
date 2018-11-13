import api from '~/api'

const state = () => ({
  user: null
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
  SET_USER (store, data) {
    store.user = data
  },
  RESET_USER (store) {
    store.user = null
  }
}

const actions = {
  fetch ({commit}) {
    return api.auth.me()
      .then(response => {
        commit('SET_USER', response.data.result)
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
        commit('SET_USER', response.data.user)
        return response
      })
  },
  reset ({commit}) {
    commit('RESET_USER')
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
