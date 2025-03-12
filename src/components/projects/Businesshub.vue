<template>
  <div>
    <project-header :route='"/businesshub"'></project-header>
    <div id='dubai' class='responsive body1'>
      <h4>TL;DR</h4>
      <p>I designed the UI for a tender for a business hub in the middle east.</p>
      <h4>Task</h4>
      <p><a class="link" href='https://www.nelta.de/'>Nelta</a> brought me on to help them with a tender for a business hub for a country in the middle east. The idea was to showcase the capabilities of modern software and AI in the context of a business hub from the government. We discussed different feature ideas and design styles. In the end we settled for the following screens with annoations to explain the functionality.</p>
      <styled-image :src='buildURL("businesshub/1-dashboard.jpg")' alt="Dashboard with a financial overview, urgent tasks and licenses" :shadow="true" />
      <styled-image :src='buildURL("businesshub/3-search.jpg")' alt="Omni-channel search for documents" :shadow="true" />
      <styled-image :src='buildURL("businesshub/4-busines-reg.jpg")' alt="Business registration with AI suggestions" :shadow="true" />
      <styled-image :src='buildURL("businesshub/5-commercial-registrations.jpg")' alt="Tracking of changes on the blockchain with AI helper" :shadow="true" />
    </div>
    <project-arrows :route='"/businesshub"'></project-arrows>
  </div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import StyledImage from '../elements/StyledImage.vue'
import projectArrows from '../elements/ProjectArrows.vue'
import { buildURL } from '@/utils'
import Button from '@/components/elements/Button.vue'


export default {
  components: {
    'project-header': ProjectHeader,
    'styled-image': StyledImage,
    'project-arrows': projectArrows,
    Button,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>