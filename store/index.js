export const state = () => ({
  light: true
})

export const mutations = {
  setLight (state, light) {
    state.light = light
  }
}

export const getters = {
  getTheme (state) {
    return state.light === true ? 'light' : 'dark'
  }
}
