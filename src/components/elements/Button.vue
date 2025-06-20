<template>
  <a :href='href' :class="'rounded-lg inline-grid items-center transition ease ' + getStyle">
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
      if (this.type === "primary" && this.bg === "light") { // primary light
        return 'bg-blue-200 hover:bg-blue-100 text-white'
      } else if (this.type === "primary" && this.bg === "dark") { // primary dark
        return 'bg-blue-300 hover:bg-blue-400 text-dark-100'
      } else if (this.type === "secondary" && this.bg === "light") { // secondary light
        return 'border border-dark-200 text-dark-200'
      } else if (this.type === "secondary" && this.bg === "grey") { // secondary grey
        return 'hover:bg-dark-100 border border-light-200 text-light-200'
      } else { // secondary dark
        return 'hover:bg-dark-200 border border-light-200 text-light-200'
      }
    },
    bgStyle() {
      let iconColor, bgColor, bgHoverColor
      if (this.type === "primary" && this.bg === "light") { // primary light
        iconColor = "white"
      } else if (this.type === "primary" && this.bg === "dark") { // primary dark
        iconColor = "var(--dark-100)"
      } else if (this.type === "secondary" && this.bg === "light") { // secondary light
        iconColor = "var(--dark-200)"
        bgColor = "none"
        bgHoverColor = "rgba(255, 255, 255, 0.5)"
      } else if (this.type === "secondary" && this.bg === "grey") { // secondary grey
        iconColor = "var(--light-200)"
        bgColor = "none"
      } else { // secondary dark
        iconColor = "var(--light-200)"
        bgColor = "none"
      }

      return {
        '--size': this.size === "lg" ? "32px" : "24px",
        '--icon-color': iconColor,
        '--bg-color': bgColor,
        '--bg-hover-color': bgHoverColor,
        'grid-template-columns': this.$slots.default && this.text ? 'var(--size) 1fr' : '1fr',
        'padding': this.text ? '12px 24px' : '11px 12px',
      }
    }
  }
}
</script>

<style scoped>
a.test {
  display: inline-grid;
  gap: 12px;
  cursor: pointer;
  transition: all .1s ease;
  border-radius: var(--radius);
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
