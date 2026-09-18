<template>
  <div
    :class='"inline-block px-4 py-2 text-sm font-medium rounded-full " + getColors'>
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
          return 'bg-blue-500/10 text-blue-500'
        } else if (this.type === 'secondary') {
          return 'bg-zinc-100 text-zinc-600'
        }
      }
    }
  },
}
</script>