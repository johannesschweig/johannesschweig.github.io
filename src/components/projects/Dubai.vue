<template>
  <div>
    <ProjectHeader />
    <div class='responsive text-dark-200'>
      <h2 class="content-heading1">TL;DR</h2>
      <p>I designed the UI for several pages for a real estate company in Dubai showcasing their latest real estate
        projects.</p>
      <h2 class="content-heading1">Problem</h2>
      <p>The initial design draft failed to portray the real estate projects in an appealing and professional manner.
        Although the imagery was generally captivating, the content lacked structure, and there were layout issues that
        compromised its professional presentation.</p>
      <StyledImage :src='buildURL("dubai/aeternitas-hero.png")' alt="Issues with the hero section" :shadow="false" />
      <StyledImage :src='buildURL("dubai/aeternitas-approach.png")' alt="Issues with the approach section"
        :shadow="false" />
      <h2 class="content-heading1">Structure</h2>
      <p>My goal with the design was to make the pages more easily understandable and guaranteeing that the impressive
        projects stand out. I structured the content into three new sections:</p>
      <h3 class="content-heading2">Project</h3>
      <p>This section showcases the iconic and spectacular nature of the project with a big hero image of the project. The
        goal of this section is to draw the visitor in to learn more about the project.</p>
      <h3 class="content-heading2">Property</h3>
      <p>This section shows the luxurious property with a carousel filled with pictures from interior and exterior. Also,
        the payment plan shows the attractiveness of the investment. The goal of this section was to show the visitor what
        they would by buying into this project and how affordable the conditions are.</p>
      <h3 class="content-heading2">Neighborhood</h3>
      <p>This section shows the surroundings and gives a feel for the atmosphere.</p>
      <h2 class="text-xl leading-8 md:text-3xl md:leading-14 font-medium text-dark-100">Design</h2>
      <StyledImage :src='buildURL("dubai/1-venice.jpeg")'
        alt="Design for Venice with the three sections and the footer" />
      <h2 class="text-xl leading-8 md:text-3xl md:leading-14 font-medium text-dark-100">Development</h2>
      <p>Nicolas Kopp from <a class="link" href="https://www.digitalessence.de/">digitalessence</a> developed the site
        with Wordpress DIVI.</p>
      <Button type="primary" bg="light" size='sm' text='Visit the page' href='https://www.gravitas-dubai.com/'>
        <img :src="buildURL('dubai/Gravitas-Logo-Light.png')" />
      </Button>
      <StyledImage :src="buildURL('dubai/eywa-2.webm')" alt='Project Heimat' />
    </div>
    <ProjectArrows />
  </div>
</template>

<script>
import ProjectHeader from '../elements/ProjectHeader.vue'
import StyledImage from '../elements/StyledImage.vue'
import ProjectArrows from '../elements/ProjectArrows.vue'
import { buildURL } from '@/utils'
import Button from '@/components/elements/Button.vue'


export default {
  components: {
    ProjectHeader,
    StyledImage,
    ProjectArrows,
    Button,
  },
  methods: {
    buildURL(src) {
      return buildURL(src)
    }
  }
}
</script>