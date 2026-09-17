<template>
  <div>
    <ProjectHeader />
    <div class='responsive text-dark-200 pb-16'>
      <h2 class="content-heading1">About my role</h2>
      <p>I work as Product Owner with a UI/UX focus on a new cloud-native practice management platform for EVEX Group, delivered together with the development studio <a class='link' href='https://turing42.com/'>Turing 42</a>. The product connects hardware used in opticians' and hearing acousticians' practices with a modern, API-first backend, replacing legacy systems with a single platform that covers appointments, consultations, configuration, and invoicing.</p>
      <p>As Product Owner I act as the link between the client, end users, and the development team — structuring requirements, prioritizing the roadmap, and shaping the UX so the product stays intuitive across both single practices and multi-location chains.</p>
      <StyledImage :src='buildURL("pms/hero.webp")' alt='Illustration of legacy devices connecting through a unified platform into the cloud' />
      <h2 class="content-heading1">Case study</h2>
      <p>This project is ongoing, so this page is intentionally just a short summary. Turing 42 published a more detailed case study covering the product architecture and delivery approach.</p>
      <a class='link' href='https://turing42.com/de/referenzen/evex-group-pms-platform/' target='_blank' rel='noopener noreferrer'>Read the case study on Turing 42 ↗</a>
    </div>
  </div>
</template>

<script>
import ProjectHeader from '@/components/elements/ProjectHeader.vue'
import StyledImage from '@/components/elements/StyledImage.vue'
import { buildURL } from '@/utils'

export default {
  components: {
    ProjectHeader,
    StyledImage,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>
