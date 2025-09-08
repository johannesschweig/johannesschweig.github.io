<template>
  <div>
    <ProjectHeader />
    <div id='dubai' class='responsive text-dark-200'>
      <h2 class="content-heading1">TL;DR</h2>
      <p>I designed the UI for a tender for a business hub in the middle east.</p>
      <h2 class="content-heading1">Task</h2>
      <p><a class="link" href='https://www.nelta.de/'>Nelta</a> brought me on to help them with a tender for a business hub for a country in the middle east. The idea was to showcase the capabilities of modern software and AI in the context of a business hub from the government. We discussed different feature ideas and design styles. In the end we settled for the following screens with annotations to explain the functionality.</p>
      <StyledImage :src='buildURL("businesshub/1-dashboard.jpg")' alt="Dashboard with a financial overview, urgent tasks and licenses" :shadow="true" :rounded="true"/>
      <StyledImage :src='buildURL("businesshub/3-search.jpg")' alt="Omni-channel search for documents" :shadow="true"  :rounded="true"/>
      <StyledImage :src='buildURL("businesshub/4-busines-reg.jpg")' alt="Business registration with AI suggestions" :shadow="true"  :rounded="true"/>
      <StyledImage :src='buildURL("businesshub/5-commercial-registrations.jpg")' alt="Tracking of changes on the blockchain with AI helper" :shadow="true"  :rounded="true"/>
    </div>
    <ProjectArrows />
  </div>
</template>

<script setup>
import ProjectHeader from '@/components/elements/ProjectHeader.vue'
import StyledImage from '@/components/elements/StyledImage.vue'
import ProjectArrows from '@/components/elements/ProjectArrows.vue'
import { buildURL } from '@/utils'
</script>