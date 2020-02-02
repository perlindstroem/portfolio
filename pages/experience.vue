<template>
  <div class="container">
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
      workExperiences: [
        {
          title: 'Associate',
          company: 'Digital Edge',
          companyUrl: 'https://digitaledge.se',
          start: '2019-09',
          end: null,
          description: [
            'Working as a full stack or machine learning engineer depending on project assignment. Projects include; text classification and natural language processing, data aggregation  and visualisation, as well as a product planning tool for industrial manufacturing.'
          ]
        },
        {
          title: 'Research Intern',
          company: 'Signality',
          companyUrl: 'https://signality.com',
          start: '2019-01',
          end: '2019-07',
          description: [
            'Conducted research on imitation learning. Developed deep learning models for player behaviour modeling. Wrote a master\'s thesis and research paper based on the findings.'
          ]
        },
        {
          title: 'Lead Software Engineer',
          company: 'Skira',
          companyUrl: 'https://skira.se',
          start: '2018-01',
          end: '2019-02',
          description: [
            'Hired to help the founders build the technical platform for grain trading. Worked with the CTO to plan and implement the platform from being an idea to a live product.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'GOLI',
          companyUrl: 'https://goli.nu',
          start: '2017-05',
          end: '2017-12',
          description: [
            'Worked with the whole technical stack on a production and capacity planning application for the healthcare industry. Integrated several third party systems to feed production data into the application.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience {
  max-width: 50vw;
}
</style>
