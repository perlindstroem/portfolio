<template>
  <button :class="[color, disabledClass]" class="button">
    {{ text }}
  </button>
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
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    disabledClass () {
      return this.disabled === true ? 'disabled' : ''
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  border-radius: .5em;
  text-decoration: none;
  padding: 1em 3em;
  margin: 0 .5em;
  font-size: 1em;
}

.dark .button {
  background-color: #111;
}

.green {
  border: 1px solid #3b8070;
  color: #3b8070;
}

.green:hover {
  color: #fff;
  background-color: #3b8070;
}

.dark .green {
  border: 1px solid #62c089;
  color: #62c089;
}

.dark .green:hover {
  color: #111;
  background-color: #62c089;
}

.grey {
  border: 1px solid #35495e;
  color: #35495e;
}

.grey:hover {
  color: #fff;
  background-color: #35495e;
}

.dark .grey {
  border: 1px solid #9eb5ce;
  color: #9eb5ce;
}

.dark .grey:hover {
  color: #111;
  background-color: #9eb5ce;
}

.red {
  border: 1px solid #5e3535;
  color: #5e3535;
}

.red:hover {
  color: #fff;
  background-color: #5e3535;
}

.dark .red {
  border: 1px solid #c77f7f;
  color: #c77f7f;
}

.dark .red:hover {
  color: #111;
  background-color: #c77f7f;
}

.disabled {
  color: #555 !important;
  background-color: #444 !important;
  pointer-events: none;
  cursor: default;
}

.disabled:hover {
  color: #555 !important;
  background-color: #444 !important;
}
</style>
