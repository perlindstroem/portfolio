export const state = () => ({
  light: true
})

export const mutations = {
  setLight (state, light) {
    state.light = light
  }
}

export const getters = {
  getLight (state) {
    return state.light
  }
}
