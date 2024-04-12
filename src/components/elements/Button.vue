<template>
  <a :href='href' :style='bgStyle'>
    <slot></slot>
    <span :class='["text", size === "lg" ? "button-lg" : "button"]' v-if='text'>
      {{ text }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
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
    bgStyle() {

      let iconColor, bgColor, bgHoverColor, border, color
      if (this.type === "primary" && this.bg === "light") { // primary light
        iconColor = "white"
        bgColor = "var(--blue-200)"
        bgHoverColor = "var(--blue-100)"
        border = "none"
      } else if (this.type === "primary" && this.bg === "dark") { // primary dark
        iconColor = "var(--dark-100)"
        bgColor = "var(--blue-300)"
        bgHoverColor = "var(--blue-400)"
        border = "none"
      } else if (this.type === "secondary" && this.bg === "light") { // secondary light
        iconColor = "var(--dark-200)"
        bgColor = "none"
        bgHoverColor = "var(--light-200)"
        border = "1px solid var(--dark-200)"
      } else { // secondary dark
        iconColor = "var(--light-200)"
        bgColor = "none"
        bgHoverColor = "var(--dark-200)"
        border = "1px solid var(--light-200)"
      }
      color = iconColor

      return {
        '--size': this.size === "lg" ? "32px" : "24px",
        '--icon-color': iconColor,
        '--bg-color': bgColor,
        '--bg-hover-color': bgHoverColor,
        'border': border,
        color: color,
        'grid-template-columns': this.$slots.default ? 'var(--size) 1fr' : '1fr',
      }
    }
  }
}
</script>

<style scoped>
a {
  display: inline-grid;
  gap: 12px;
  cursor: pointer;
  transition: all .1s ease;
  border-radius: var(--radius);
  padding: 12px 24px;
  background-color: var(--bg-color);
  align-items: center;
}

:deep(svg),
:deep(img) {
  display: inline-block;
  max-width: var(--size);
  max-height: var(--size);
  vertical-align: top;
  fill: var(--icon-color);
}

:deep(svg) {
  width: var(--size);
}

:deep(svg path) {
  transition: all .2s ease;
}

a:hover,
a:active {
  background-color: var(--bg-hover-color);
}

a :deep(svg path) {
  fill: var(--icon-color);
}

.text {
  line-height: var(--size);
}


@media screen and (max-width: 768px) {
  a {
    --size: 24px !important;
  }
}
</style>
