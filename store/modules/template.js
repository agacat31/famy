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
  TOGGLE_SIDEBAR (state) {
    state.template.sidebar = !state.template.sidebar
  },
  SET_DRAWER (state, drawer) {
    state.template.drawer = drawer
  },
  SET_DRAWER_RIGHT (state, drawerRight) {
    state.template.drawerRight = drawerRight
  },
  SET_FLOAT_DRAWER (state, floatDrawer) {
    state.template.floatDrawer = floatDrawer
  }
}

const actions = {
  setSidebar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  setDrawer ({ commit }, drawer) {
    commit('SET_DRAWER', drawer)
  },
  setDrawerRight ({ commit }, drawerRight) {
    commit('SET_DRAWER_RIGHT', drawerRight)
  },
  setFloatDrawer ({ commit }, floatDrawer) {
    commit('SET_FLOAT_DRAWER', floatDrawer)
  }
}

export var template = {
  state,
  getters,
  mutations,
  actions
}
