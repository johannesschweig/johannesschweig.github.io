<template>
  <div class='tile'>
    <TextExpand :text="testimonialProps.text" :limit="330" />
    <div class='person'>
      <img :src='buildURL(`landingpage/${testimonialProps.image}`)' :alt='testimonialProps.name' />
      <div class='identity'>
        <div class='name'>
          {{ testimonialProps.name }}
        </div>
        <div class='position'>
          {{ testimonialProps.position }}
          <template v-if='testimonialProps.company'>@ {{ testimonialProps.company }}</template>
        </div>
      </div>
      <Button type="secondary" bg="grey" size='sm' :href='testimonialProps.link'>
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
  background-color: var(--dark-200);
  border-radius: var(--radius-2);
  color: white;
  padding: 24px;
  display: grid;
  grid-template-rows: 1fr 64px;
  gap: 24px;
}


.person {
  display: grid;
  grid-template-columns: 64px 1fr 48px;
  column-gap: 12px;
  align-items: center;
}

img {
  width: 60px;
  height: 60px;
  border-radius: 99px;
  object-fit: cover;
  border: 2px solid var(--blue-200);
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