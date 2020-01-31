<template>
  <div class="container">
    <div>
      <work-item
        v-for="exp in workExperiences"
        :key="exp.title"
        :experience="exp"
      />
      <nuxt-link to="/">
        go back
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import WorkItem from '../components/WorkItem.vue'

export default {
  components: {
    WorkItem
  },
  data () {
    return {
      workExperiences: [
        {
          title: 'Associate',
          company: 'Digital Edge',
          start: '2019-09',
          end: null
        },
        {
          title: 'Research Intern',
          company: 'Signality',
          start: '2019-01',
          end: '2019-07'
        },
        {
          title: 'Lead Software Engineer',
          company: 'Skira',
          start: '2018-01',
          end: '2019-02'
        },
        {
          title: 'Software Engineer',
          company: 'GOLI',
          start: '2017-05',
          end: '2017-12'
        }
      ]
    }
  }
}
</script>

<style>

</style>
