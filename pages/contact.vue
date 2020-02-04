<template>
  <div :class="theme" class="container">
    <div v-if="error">
      <h2 class="title">
        Ops, something went wrong
      </h2>
      <p>
        Send me an email on <em>per@lndstrm.se</em> instead of using this erranous form.
      </p>
      <nuxt-link to="/">
        <the-button text="Go to main page" />
      </nuxt-link>
    </div>
    <div v-else-if="!sent">
      <h2 class="title">
        What can I help you with?
      </h2>
      <label>
        <span>What should I call you?</span>
        <input v-model="name" type="text">
      </label>
      <label>
        <span>What's your email address?</span>
        <input v-model="email" type="text">
      </label>
      <label>
        <span>What do you want to tell me?</span>
        <textarea v-model="message" rows="5">asd</textarea>
      </label>
      <nuxt-link to="/">
        <the-button color="red" text="Go back" />
      </nuxt-link>
      <the-button @click="send" text="Send message" />
    </div>
    <div v-else>
      <h2 class="title">
        Thanks for your message!
      </h2>
      <nuxt-link to="/">
        <the-button text="Go to main page" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TheButton from '../components/TheButton.vue'

export default {
  components: {
    TheButton
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
      sent: false,
      error: false
    }
  },
  computed: {
    theme () { return this.$store.getters.getTheme }
  },
  methods: {
    async send () {
      const response = await fetch('https://per-portfolio.herokuapp.com/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message
        })
      })

      if (response.status === 200) {
        this.sent = true
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 1em;
}

.dark label {
  color: #bbc9d8;
}

label > span, p {
  display: block;
  font-size: 1.2em;
  padding: .5em;
  font-weight: 250;
}

a:hover {
  cursor: pointer;
}

input[type="text"], textarea {
  font-size: 1.2em;
  width: 20em;
  border: 1px solid rgb(130, 158, 158);
  border-radius: .5em;
  padding: .5em;
  resize: none;
}

input[type="text"]:focus, textarea:focus {
  outline:none;
  border: 1px solid green;
}

.title {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.dark .title {
  color: #709ac7;
}

</style>
