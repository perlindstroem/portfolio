<template>
  <div :class="theme" class="container">
    <input v-model="filter">
    <button @click="search">
      search
    </button>
    <div class="experience">
      <work-item
        v-for="exp in workExperiences"
        :key="exp.title"
        :experience="exp"
      />
      <div class="links">
        <nuxt-link
          to="/"
        >
          <the-button color="grey" text="Go back" />
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
import WorkItem from '../components/WorkItem.vue'
import TheButton from '../components/TheButton.vue'

export default {
  components: {
    WorkItem,
    TheButton
  },
  data () {
    return {
      workExperiences: [],
      filter: ''
    }
  },
  computed: {
    theme () { return this.$store.getters.getTheme }
  },
  async mounted () {
    const results = await fetch(process.env.api + '/exp-data')
    const data = await results.json()

    this.workExperiences = data
  },
  methods: {
    async search () {
      const results = await fetch(process.env.api + '/exp-data?filter=' + this.filter)
      const data = await results.json()

      this.workExperiences = data
    }
  }
}
</script>

<style scoped>
.experience {
  max-width: 50vw;
}
</style>
