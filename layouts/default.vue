<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: this.$store.getters.getTheme
    }
  },
  async mounted () {
    // use Stockholm coordinates to get sunrise/sunset times
    const response = await fetch('https://api.sunrise-sunset.org/json?lat=59.334591&lng=18.063240&formatted=0')
    const json = await response.json()

    const now = Date.now()

    const sunrise = Date.parse(json.results.sunrise)
    const sunset = Date.parse(json.results.sunset)

    const light = now > sunrise && now < sunset

    this.$store.commit('setLight', light)
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.dark.container {
  background-color: #111;
}
</style>
