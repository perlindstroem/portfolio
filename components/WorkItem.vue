<template>
  <div>
    <p class="title">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
