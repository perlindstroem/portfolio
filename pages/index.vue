<template>
  <div :key="theme" :class="theme" class="container">
    <div>
      <h1 class="title">
        Hi there, welcome!
      </h1>
      <h2 class="subtitle">
        This is the digital resumé of <strong>Per Lindström</strong>.
      </h2>
      <p class="description">
        I am a software engineer with an interest in <em>scalable web applications</em> and <em>data science</em>.<br>
        When I'm not engineering stuff, I enjoy experimenting in the kitchen and learning new things.<br>
        I have recently taken up climbing, which is my new favourite physical activity.<br><br>
        On this site, you can read about me and what I've done so far.<br>
        If you're interested in working with me, shoot me a message.
      </p>
      <div class="links">
        <nuxt-link
          to="/experience"
        >
          <the-button text="Work experience" />
        </nuxt-link>
        <nuxt-link
          to="/contact"
        >
          <the-button text="Contact me" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '../components/TheButton.vue'

export default {
  components: {
    TheButton
  },
  computed: {
    theme () { return this.$store.getters.getTheme }
  },
  async fetch ({ store, params }) {
    // use Stockholm coordinates to get sunrise/sunset times
    const response = await fetch('https://api.sunrise-sunset.org/json?lat=59.334591&lng=18.063240&formatted=0')
    const json = await response.json()

    const now = Date.now()

    const sunrise = Date.parse(json.results.sunrise)
    const sunset = Date.parse(json.results.sunset)

    const light = now > sunrise && now < sunset

    store.commit('setLight', light)
  }
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.dark .title {
  color: #95bbe4;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.dark .subtitle {
  color: rgb(186, 195, 212);
}

.description {
  line-height: 1.5em;
  font-size: 1.2em;
  color: #2c4055;
  font-weight: 250;
}

.dark .description {
  color: #ddd;
}

.links {
  padding-top: 15px;
}
</style>
