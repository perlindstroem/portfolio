<template>
  <div class="container">
    <div>
      <work-item
        v-for="exp in workExperiences"
        :key="exp.title"
        :title="exp.title"
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
          title: 'Associate'
        },
        {
          title: 'Research Intern'
        },
        {
          title: 'Lead Software Engineer'
        },
        {
          title: 'Software Engineer'
        }
      ]
    }
  }
}
</script>

<style>

</style>
