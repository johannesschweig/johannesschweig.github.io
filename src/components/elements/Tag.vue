<template>
  <div
    :class='"button inline-block px-3 py-1.5 rounded-lg " + getColors'>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    }
  },
  computed: {
    getColors() {
      if (this.bg === 'dark') {
        if (this.type === 'primary') {
          return 'bg-blue-300 text-light-100'
        } else if (this.type === 'secondary') {
          return 'bg-light-200 text-dark-200'
        }
      } else if (this.bg === 'light') {
        if (this.type === 'primary') {
          return 'bg-blue-200 text-light-100'
        } else if (this.type === 'secondary') {
          return 'bg-light-200 text-dark-200'
        }
      }
    }
  },
}
</script>