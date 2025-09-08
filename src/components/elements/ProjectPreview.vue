<template>
  <router-link class='bg-dark-200 rounded-2xl transform transition-transform hover:scale-105' :to='projProps.route'>
    <img :src='buildURL(projProps.image.src)' :alt='projProps.image.alt' class="rounded-t-2xl aspect-16/10 w-full"/>
    <div class='m-4 mb-6 md:m-6 md:mb-10'>
      <div class='text-white text-xl md:text-2xl mb-3 md:mb-4'>{{ projProps.slogan }}</div>
      <div class="flex gap-4">
        <Tag :text="projProps.task" type="primary" bg="dark"/>
        <Tag :text="projProps.industry" type="secondary" bg="dark"/>
      </div>
    </div>
  </router-link>
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
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>