<template>
    <WelcomeBanner />
    <Projects />
    <Testimonials />
</template>

<script>
import WelcomeBanner from './WelcomeBanner.vue'
import Testimonial from '@/components/elements/Testimonial.vue'
import Projects from '@/components/content/Projects.vue'
import Testimonials from '@/components/content/Testimonials.vue'

export default {
  components: {
    Projects,
    Testimonial,
    Testimonials,
    WelcomeBanner
  },
}
</script>
