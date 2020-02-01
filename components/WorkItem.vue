<template>
  <div class="work-item">
    <p class="title">
      <strong>{{ experience.title }}</strong> at <em>{{ experience.company }}</em>
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

<style>
.work-item {
  padding-bottom: 1em;
}

.title {
  font-size: 1.2em;
  margin-bottom: .4em;
}

.period {
  color: darkslategray;
}

.description {
  padding: .5em;
}
</style>
