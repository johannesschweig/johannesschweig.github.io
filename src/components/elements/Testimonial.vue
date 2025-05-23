<template>
  <div class='bg-dark-200 rounded-2xl p-6 grid grid-rows-[1fr_64px] gap-6'>
    <TextExpand :text="testimonialProps.text" :limit="330" />
    <div class='grid grid-cols-[1fr_48px] items-center'>
      <a :href='testimonialProps.personLink' class="grid grid-cols-[64px_1fr] gap-3 items-center  hover:bg-linear-to-r from-dark-100 to-dark-200 rounded-l-full rounded-r-4xl group">
        <img :src='buildURL(`landingpage/${testimonialProps.image}`)' :alt='testimonialProps.name' class="border-2 border-blue-200 group-hover:border-blue-300 w-[60px] h-[60px] rounded-full object-cover p-0.5"/>
        <div>
          <div class='text-white mb-1'>
            {{ testimonialProps.name }}
          </div>
          <div class='text-light-200 text-sm'>
            {{ testimonialProps.position }}
            <template v-if='testimonialProps.company'>@ {{ testimonialProps.company }}</template>
          </div>
        </div>
      </a>
      <Button type="secondary" bg="grey" size='sm' :href='testimonialProps.companyLink' class="h-12">
        <ArrowUpIcon />
      </Button>
    </div>
  </div>
</template>

<script>
import { buildURL } from '@/utils';
import ArrowUpIcon from '@/assets/landingpage/arrow-up.svg'
import Button from './Button.vue';
import TextExpand from './TextExpand.vue';

export default {
  components: {
    ArrowUpIcon,
    Button,
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