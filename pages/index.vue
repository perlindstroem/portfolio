<template>
  <div class="container">
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
          class="button--green"
        >
          work experience
        </nuxt-link>
        <nuxt-link
          to="/contact"
          class="button--green"
        >
          contact me
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.description {
  line-height: 1.5em;
  font-size: 1.2em;
  color: #2c4055;
  font-weight: 250;
}

.links {
  padding-top: 15px;
}
</style>
