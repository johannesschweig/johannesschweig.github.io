<template>
  <div class="bg-zinc-50 py-4">
    <div id='testimonials' class="responsive">
      <div class="flex items-center gap-3 mt-10 mb-4">
        <span class="w-6 h-px bg-blue-500"></span>
        <span class="text-xs md:text-sm font-medium tracking-widest text-blue-500 uppercase">Testimonials</span>
      </div>
      <h2 class="text-3xl font-extrabold mb-8 text-zinc-900">What my clients say</h2>
      <div class='grid grid-cols-1 md:grid-cols-3 gap-6 mb-24'>
        <Testimonial v-for='t in testimonials' :testimonialProps='t'/>
      </div>
    </div>
  </div>
</template>

<script>
import { testimonialData } from '@/utils/testimonials.js'
import Testimonial from '@/components/elements/Testimonial.vue'

export default {
  components: {
    Testimonial,
  },
  computed: {
    // data for testimonials
    testimonials() {
      return testimonialData
    }
  }
}
</script>