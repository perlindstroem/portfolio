<template>
  <a :class="color" class="button">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    color: {
      required: false,
      type: String,
      default: 'green'
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  margin: 0 5px;
}

.green {
  border: 1px solid #3b8070;
  color: #3b8070;
}

.green:hover {
  color: #fff;
  background-color: #3b8070;
}

.grey {
  border: 1px solid #35495e;
  color: #35495e;
}

.grey:hover {
  color: #fff;
  background-color: #35495e;
}

.red {
  border: 1px solid #5e3535;
  color: #5e3535;
}

.red:hover {
  color: #fff;
  background-color: #5e3535;
}
</style>
