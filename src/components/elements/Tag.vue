<template>
  <div
    class="tag button"
    :style='{
      backgroundColor: type === "primary" ? "var(--blue-300)" : "var(--dark-200)",
    }'>
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
    }
  },
}
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: 6px 12px;
  color: var(--light-100);
  border-radius: var(--radius);
}

</style>