<template>
  <WelcomeBanner />
  <Clients />
  <Projects />
  <Testimonials />
</template>

<script>
import WelcomeBanner from './WelcomeBanner.vue'
import Clients from '@/components/content/Clients.vue'
import Testimonial from '@/components/elements/Testimonial.vue'
import Projects from '@/components/content/Projects.vue'
import Testimonials from '@/components/content/Testimonials.vue'

export default {
  components: {
    Clients,
    Projects,
    Testimonial,
    Testimonials,
    WelcomeBanner
  },
}
</script>
