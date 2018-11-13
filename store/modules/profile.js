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
  setProfile (state, profile) {
    state.profile = profile
    if (profile.photo === undefined) {
      state.profile.photo = defaultPhoto
    } else {
      
    }
  }
}

const actions = {
  actProfile ({ commit }, profile) {
    commit('setProfile', profile)
  }
}

export var profile = {
  state,
  getters,
  mutations,
  actions
}
