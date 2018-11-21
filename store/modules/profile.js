import api from '~/api'
import defaultPhoto from '../../static/images/kaneki_ken.png'

const state = () => ({
  profile: {
    country: null,
    email: null,
    name: null,
    phone: null,
    photo: null,
    username: null
  }
})

const getters = {
  profile (state) {
    return state.profile
  }
}

const mutations = {
  SET_PROFILE (state, profile) {
    state.profile = profile
    if (profile.photo === undefined) {
      state.profile.photo = defaultPhoto
    } else {
      
    }
  }
}

const actions = {
  setProfile ({ commit }, profile) {
    commit('SET_PROFILE', profile)
  },
  getProfile ({ commit }) {
    return api.auth.me()
      .then(response => {
        commit('SET_PROFILE', response.data.user)
        return response
      })
      .catch(error => {
        return error
      })
  }
}

export var profile = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
