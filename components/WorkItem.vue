<template>
  <div class="work-item">
    <p class="heading">
      <span class="title">{{ experience.title }}</span> at <span class="company"><a :href="experience.companyUrl">{{ experience.company }}</a></span>
    </p>
    <p class="period">
      {{ experience.start }} - {{ experience.end || 'ongoing' }}
    </p>
    <p :key="d" v-for="d in experience.description" class="description">
      {{ d }}
    </p>
  </div>
</template>

<script>
const requiredExperienceKeys = ['title', 'company', 'start', 'end']

export default {
  props: {
    experience: {
      required: true,
      type: Object,
      validator: obj => requiredExperienceKeys.every(key => key in obj)
    }
  }
}
</script>

<style scoped>
.work-item {
  padding-bottom: 1em;
}

.heading {
  font-size: 1.2em;
  margin-bottom: .4em;
  color: #526488;
  font-weight: 300;
}

.title {
  font-weight: 600;
}

.company {
  font-style: italic;
  font-weight: 400;
}

.period {
  color: #555;
  font-weight: 250;
}

.description {
  padding: .5em;
  color: #555;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: underline;
  background-color: #eeeeee
}
</style>
