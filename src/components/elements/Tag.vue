<template>
  <div
    class="tag button"
    :style='getStyle'>
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
    getStyle() {
      if (this.bg === 'dark') {
        if (this.type === 'primary') {
          return {
            backgroundColor: "var(--blue-300)",
            color: "var(--light-100)",
          }
        } else if (this.type === 'secondary') {
          return {
            backgroundColor: "var(--light-200)",
            color: "var(--dark-200)",
          }
        }
      } else if (this.bg === 'light') {
        if (this.type === 'primary') {
          return {
            backgroundColor: "var(--blue-200)",
            color: "var(--light-100)",
          }
        } else if (this.type === 'secondary') {
          return {
            backgroundColor: "var(--light-200)",
            color: "var(--dark-200)",
          }
        }
      }
      // backgroundColor: type === "primary" ? "var(--blue-300)" : "var(--dark-200)",
    }
  },
}
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: var(--radius);
}

</style>