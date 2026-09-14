<template>
  <div class='responsive gap-10 lg:gap-16 pt-12 md:pt-24 lg:grid lg:grid-cols-[5fr_4fr] items-center'>
    <div class="flex flex-col my-auto">
      <div class="flex items-center gap-3 mb-6">
        <span class="w-6 h-px bg-blue-500"></span>
        <span class="text-xs md:text-sm font-medium tracking-widest text-blue-500 uppercase">Business Analysis / Product Ownership</span>
      </div>
      <div class="text-4xl leading-12 md:text-5xl md:leading-14 lg:text-6xl lg:leading-18 font-extrabold text-zinc-900 mb-6">Clear specifications. Aligned teams. Products that launch on time.</div>
      <div class="text-lg md:text-xl font-semibold text-zinc-900 mb-4">IT Business Analyst &amp; Interim Product Owner for Complex B2B Systems</div>
      <div class="text-zinc-500 mb-8 max-w-xl">With a background in UX research and product design, I translate ambiguous technical, regulatory, and business requirements into specs, roadmaps, and functional concepts that both engineering and stakeholders can act on. I work best in domains with real complexity and constraints — hardware, regulated processes, legacy systems, high-stakeholder environments.</div>
      <div class="flex gap-6 lg:mb-6">
        <Button type="primary" bg="black" size='lg' text='Send me an email' href='mailto:hello@johannesschweig.de'>
          <SendIcon />
        </Button>
        <Button type="secondary" bg="light" size='lg' text="LinkedIn" href='https://linkedin.com/in/jschweig'>
        </Button>
      </div>
    </div>
    <div class="relative mt-8 lg:mt-0">
      <div class="rounded-3xl overflow-hidden aspect-4/5">
        <img class="w-full h-full object-cover object-[54%_center]" :src="buildURL('landingpage/portrait.jpg')" />
      </div>
    </div>
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
