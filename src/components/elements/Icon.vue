<template>
  <a
    :class='{"with-text": text }'
    :href='href'
    :style='cssVars'>
    <slot></slot>
    <div
      class='text'
      v-if='text'>
      {{ text }}
    </div>
  </a>
</template>

<script>
  export default {
    props: {
      href: {
        type: String
      },
      size: {
        type: String,
        required: true
      },
      text: {
        type: String
      }
    },
    computed: {
      cssVars() {
        return {
          '--size': this.size + 'px'
        }
      }
    }
  }
</script>

<style scoped>
a {
  display: inline-block;
  cursor: pointer;
  height: var(--size);
  color: var(--dark);
  transition: all .2s ease;
}

:deep(svg) {
  display: inline-block;
  height: var(--size);
  width: var(--size);
  vertical-align: top;
}

:deep(svg path) {
  transition: all .2s ease;
}

/* Icon with text */
.with-text {
  border-radius: var(--radius);
  padding: 6px 12px;
}

.with-text:hover,
.with-text:hover {
  color: white;
  background-color: var(--blue);
}

.with-text :deep(svg) {
  margin-right: 8px;
}

.with-text :deep(svg path) {
  fill: var(--dark);
}

.with-text:hover :deep(svg path) {
  fill: white;
}

.text {
  display: inline-block;
  vertical-align: top;
  line-height: var(--size);
}

/* Icon without text */

a:not(.with-text) :deep(svg path) {
  fill: white;
  opacity: .8;
}

a:not(.with-text):hover :deep(svg path) {
  opacity: 1;
}
</style>
