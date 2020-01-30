<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        hi there, welcome!
      </h1>
      <h2 class="subtitle">
        this is the portfolio of <strong>per lindström</strong>.
      </h2>
      <p class="description">
        i am a software engineer with an interest in scalable web applications and data science.<br>
        here, you can read about me and what i've done so far.<br>
        if you're interested in working with me, shoot an email or dm my way.
      </p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.description {
  line-height: 1.5em;
}

.links {
  padding-top: 15px;
}
</style>
