const state = () => ({
  template: {
    sidebar: false,
    drawer: true,
    drawerRight: false,
    floatDrawer: false
  }
})

const getters = {
  sidebar (state) {
    return state.template.sidebar
  },
  drawer (state) {
    return state.template.drawer
  },
  drawerRight (state) {
    return state.template.drawerRight
  },
  floatDrawer (state) {
    return state.template.floatDrawer
  }
}

const mutations = {
  toggleSidebar (state) {
    state.template.sidebar = !state.template.sidebar
  },
  setDrawer (state, drawer) {
    state.template.drawer = drawer
  },
  setDrawerRight (state, drawerRight) {
    state.template.drawerRight = drawerRight
  },
  setFloatDrawer (state, floatDrawer) {
    state.template.floatDrawer = floatDrawer
  }
}

const actions = {
  actSidebar ({ commit }) {
    commit('toggleSidebar')
  },
  actDrawer ({ commit }, drawer) {
    commit('setDrawer', drawer)
  },
  actDrawerRight ({ commit }, drawerRight) {
    commit('setDrawerRight', drawerRight)
  },
  actFloatDrawer ({ commit }, floatDrawer) {
    commit('setFloatDrawer', floatDrawer)
  }
}

export var template = {
  state,
  getters,
  mutations,
  actions
}
