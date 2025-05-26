<template>
  <a :href='href' :class="'rounded-lg inline-grid gap-3 items-center transition ease ' + styleMap[type][bg]" :style="bgStyle">
    <slot></slot> <!-- icon -->
    <span v-if='text' :class='size === "lg" ? "text-base leading-6 md:text-xl md:leading-8" : "text-base leading-6"'>
      {{ text }}
    </span>
  </a>
</template>

<script>
const styleMap = {
  primary: {
    light: 'bg-blue-200 hover:bg-blue-100 active:bg-blue-100 text-white fill-white',
    dark: 'bg-blue-300 hover:bg-blue-400 active:bg-blue-400 text-dark-100 fill-dark-100',
  },
  secondary: {
    light: 'hover:bg-[#ffffff80] active:bg-[#ffffff80] border border-dark-200 text-dark-200 fill-dark-200',
    grey: 'hover:bg-dark-100 active:bg-dark-100 border border-light-200 text-light-200 fill-light-200',
    dark: 'hover:bg-dark-200 active:bg-dark-200 border border-light-200 text-light-200 fill-light-200'
  },
}

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
  data() {
    return {
      styleMap,
    }
  },
  computed: {
    bgStyle() {
      return {
        '--size': this.size === "lg" ? "32px" : "24px",
        'grid-template-columns': this.$slots.default && this.text ? 'var(--size) 1fr' : '1fr',
        'padding': this.text ? '12px 24px' : '11px 12px',
      }
    }
  }
}
</script>

<style scoped>
::v-deep(svg),
::v-deep(g) {
  width: var(--size);
  max-width: var(--size);
  max-height: var(--size);
}


@media screen and (max-width: 768px) {
  a {
    --size: 24px !important;
  }
}
</style>
