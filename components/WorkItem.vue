<template>
  <div class="work-item">
    <p class="title">
      <strong>{{ experience.title }}</strong> at <em>{{ experience.company }}</em>
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
</style>
