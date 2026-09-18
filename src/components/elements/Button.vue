<template>
  <a :href='href' :class="'rounded-full inline-grid gap-3 items-center transition ease font-medium ' + styleMap[type][bg]" :style="bgStyle">
    <slot></slot> <!-- leading icon -->
    <span v-if='text' :class='size === "lg" ? "text-base leading-6 md:text-lg md:leading-7" : "text-base leading-6"'>
      {{ text }}
    </span>
    <slot name="trailing"></slot> <!-- trailing icon -->
  </a>
</template>

<script>
const styleMap = {
  primary: {
    light: 'bg-blue-500 hover:bg-blue-100 active:bg-blue-100 text-white fill-white',
    dark: 'bg-blue-500 hover:bg-blue-100 active:bg-blue-100 text-white fill-white',
    black: 'bg-zinc-900 hover:bg-black active:bg-black text-white fill-white',
    white: 'bg-white hover:bg-zinc-100 active:bg-zinc-100 text-zinc-900 fill-zinc-900',
  },
  secondary: {
    light: 'hover:bg-zinc-900/5 active:bg-zinc-900/5 border border-zinc-900/15 text-zinc-900 fill-zinc-900',
    grey: 'hover:bg-dark-100 active:bg-dark-100 border border-light-200 text-light-200 fill-light-200',
    dark: 'hover:bg-white/10 active:bg-white/10 border border-white/20 text-white fill-white'
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
    columns() {
      const cols = []
      if (this.$slots.default) cols.push('var(--size)')
      cols.push(this.text ? '1fr' : 'auto')
      if (this.$slots.trailing) cols.push('var(--size)')
      return cols.join(' ')
    },
    bgStyle() {
      return {
        '--size': this.size === "lg" ? "32px" : "24px",
        'grid-template-columns': this.columns,
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
