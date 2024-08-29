<template>
  <a class='tile' href='https://www.linetweet.com/'>
    <div class='text'>
      {{ testimonialProps.text }}
    </div>
    <div class='person'>
      <img :src='buildURL(`landingpage/${testimonialProps.image}`)' :alt='testimonialProps.name' />
      <div class='identity'>
        <div class='name'>
          {{ testimonialProps.name }}
        </div>
        <div class='position'>
          {{ testimonialProps.position }} @ {{ testimonialProps.company }}
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { buildURL } from '@/utils';

export default {
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
  background-color: var(--dark-100);
  border-radius: var(--radius-2);
  color: white;
  padding: 24px;
  display: grid;
  gap: 24px;
}

.text {
  line-height: 28px;
}

.person {
  display: grid;
  grid-template-columns: 64px 1fr;
  column-gap: 12px;
  align-items: center;
}

img {
  width: 64px;
  height: 64px;
  border-radius: 32px;
  object-fit: cover;
}

.name {
  margin-bottom: 4px;
}

.position {
  font-size: var(--size-sub2);
  color: var(--light-200);
}

</style>