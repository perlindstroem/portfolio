<template>
  <div class="work-item">
    <p class="title">
      <strong>{{ title }}</strong> at <em>{{ company }}</em>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    company: {
      required: true,
      type: String
    }
  }
}
</script>

<style>
.work-item {
  padding-bottom: 1em;
}
</style>
