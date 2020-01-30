<template>
  <div class="container">
    <div>
      <work-item
        v-for="exp in workExperiences"
        :key="exp.title"
        :title="exp.title"
        :company="exp.company"
      />
      <a href="/">go back</a>
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
          company: 'Digital Edge'
        },
        {
          title: 'Research Intern',
          company: 'Signality'
        },
        {
          title: 'Lead Software Engineer',
          company: 'Skira'
        },
        {
          title: 'Software Engineer',
          company: 'GOLI'
        }
      ]
    }
  }
}
</script>

<style>

</style>
