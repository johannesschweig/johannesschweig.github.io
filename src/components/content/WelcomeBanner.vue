<template>
  <div class='responsive gap-6 pt-8 md:pt-18 lg:grid lg:grid-cols-[5fr_4fr] items-end'>
    <div class="grid gap-6 my-auto">
      <div class="text-4xl leading-12 md:text-5xl md:leading-14 lg:text-6xl lg:leading-18 text-dark-100">Design with clarity. Develop without guesswork.</div>
      <div class="text-dark-200">I help founders and venture teams turn ideas into clear, buildable products. With wireframes and prototypes, I align teams on scope, refine the user journey, and make development-ready designs.</div>
      <div class="flex gap-6 lg:mb-6">
        <Button type="primary" bg="light" size='lg' text='Send me an email' href='mailto:hello@johannesschweig.de'>
          <SendIcon />
        </Button>
        <Button type="secondary" bg="light" size='lg' text="LinkedIn" href='https://linkedin.com/in/jschweig'>
        </Button>
      </div>
    </div>
    <img class="mt-8 lg:mt-0 max-w-4/5 lg:max-w-full" :src="buildURL('landingpage/portrait.png')" />
  </div>
</template>

<script>
import SendIcon from '@/assets/landingpage/send.svg'
import { buildURL } from '@/utils'
import Button from '@/components/elements/Button.vue'


export default {
  components: {
    Button,
    SendIcon,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .responsive {
    padding-top: 32px;
  }
}
</style>