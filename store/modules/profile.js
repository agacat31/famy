import defaultPhoto from '../../static/images/kaneki_ken.png'

const state = () => ({
  profile: {
    name: 'Aga Atmaja',
    photo: defaultPhoto,
    phone: '081213551169',
    email: 'aga@gmail.com',
    company: 'agacat',
    position: 'Developer'
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
  }
}

export var profile = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
