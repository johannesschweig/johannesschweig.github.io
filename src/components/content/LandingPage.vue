<template>
  <WelcomeBanner />
  <Projects />
  <Testimonials />
  <Packages />
</template>

<script>
import WelcomeBanner from './WelcomeBanner.vue'
import Testimonial from '@/components/elements/Testimonial.vue'
import Projects from '@/components/content/Projects.vue'
import Testimonials from '@/components/content/Testimonials.vue'
import Packages from '@/components/content/Packages.vue'

export default {
  components: {
    Packages,
    Projects,
    Testimonial,
    Testimonials,
    WelcomeBanner
  },
}
</script>
