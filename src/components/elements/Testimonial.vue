<template>
  <div class='bg-white border border-zinc-900/10 shadow-sm rounded-2xl p-6 grid grid-rows-[auto_1fr_auto] gap-4'>
    <svg class="w-6 h-6 text-blue-500/40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
    </svg>
    <TextExpand :text="testimonialProps.text" :limit="330" />
    <a :href='testimonialProps.personLink' class="flex items-center gap-3 group">
      <img :src='buildURL(`landingpage/${testimonialProps.image}`)' :alt='testimonialProps.name' class="w-10 h-10 rounded-full object-cover"/>
      <div>
        <div class='text-zinc-900 font-medium text-sm group-hover:text-blue-500 transition-colors'>
          {{ testimonialProps.name }}
        </div>
        <div class='text-zinc-500 text-xs'>
          {{ testimonialProps.position }}
          <template v-if='testimonialProps.company'>@ {{ testimonialProps.company }}</template>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { buildURL } from '@/utils';
import TextExpand from './TextExpand.vue';

export default {
  components: {
    TextExpand,
  },
  props: {
    testimonialProps: {
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