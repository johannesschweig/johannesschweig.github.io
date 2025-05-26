<template>
  <div>
    <div class="responsive">
      <h2 class="text-3xl font-medium mt-10 mb-8">What my clients say</h2>
      <div class='general-grid'>
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