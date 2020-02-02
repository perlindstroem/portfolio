<template>
  <div class="container">
    <div v-if="!sent">
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
      <nuxt-link class="button--red" to="/">
        Go back
      </nuxt-link>
      <a @click="send" class="button--green">
        Send
      </a>
    </div>
    <div v-else>
      <h2 class="title">
        Thanks for your message!
      </h2>
      <nuxt-link class="button--red" to="/">
        Go to main page
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      sent: false
    }
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

      console.log(response)

      if (response.status === 200) {
        console.log('thanks!')
        this.sent = true
      } else {
        console.log('something went wrong')
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

label > span {
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
  background: #fff;
}

.title {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
