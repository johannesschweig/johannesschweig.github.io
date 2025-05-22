<template>
  <div class='tile bg-dark-200'>
    <TextExpand :text="testimonialProps.text" :limit="330" />
    <div class='grid grid-cols-[1fr_48px] items-center'>
      <a :href='testimonialProps.personLink' class="grid grid-cols-[64px_1fr] gap-3 items-center  hover:bg-linear-to-r from-dark-100 to-dark-200 rounded-l-full rounded-r-4xl group">
        <img :src='buildURL(`landingpage/${testimonialProps.image}`)' :alt='testimonialProps.name' class="border-2 border-blue-200 group-hover:border-blue-300"/>
        <div class='identity'>
          <div class='name text-white'>
            {{ testimonialProps.name }}
          </div>
          <div class='position'>
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

<style scoped>
.tile {
  border-radius: var(--radius-2);
  color: white;
  padding: 24px;
  display: grid;
  grid-template-rows: 1fr 64px;
  gap: 24px;
}


img {
  width: 60px;
  height: 60px;
  border-radius: 99px;
  object-fit: cover;
  padding: 2px;
}

.name {
  margin-bottom: 4px;
}

.position {
  font-size: var(--size-sub2);
  color: var(--light-200);
}
</style>