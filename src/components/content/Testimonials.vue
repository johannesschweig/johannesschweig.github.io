<template>
  <div>
    <div class="responsive">
      <h4>What my clients say</h4>
      <div class='grid'>
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

<style scoped>
h4 {
  margin-bottom: 32px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 100px;
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>