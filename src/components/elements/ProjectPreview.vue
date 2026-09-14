<template>
  <component :is='isExternal ? "a" : "router-link"' v-bind='linkAttrs' class='block bg-white border border-zinc-900/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden'>
    <img :src='buildURL(projProps.image.src)' :alt='projProps.image.alt' class="aspect-16/10 w-full object-cover"/>
    <div class='p-6'>
      <div class="text-xs font-medium tracking-widest text-blue-500 uppercase mb-2">{{ projProps.industry }}</div>
      <div class='text-zinc-900 text-xl md:text-2xl font-semibold mb-2'>{{ projProps.name }}</div>
      <p class="text-zinc-500 text-sm mb-4">{{ projProps.slogan }}</p>
      <div class="flex gap-2">
        <Tag :text="projProps.task" type="primary" bg="light"/>
        <Tag :text="projProps.industry" type="secondary" bg="light"/>
      </div>
    </div>
  </component>
</template>

<script>
import { buildURL } from '@/utils';
import Tag from "./Tag.vue"

export default {
  components: {
    Tag
  },
  props: {
    projProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    isExternal() {
      return /^https?:\/\//.test(this.projProps.route)
    },
    linkAttrs() {
      return this.isExternal
        ? { href: this.projProps.route, target: '_blank', rel: 'noopener noreferrer' }
        : { to: this.projProps.route }
    }
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>