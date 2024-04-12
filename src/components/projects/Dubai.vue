<template>
  <div>
    <project-header :route='"/dubai"'></project-header>
    <div id='dubai' class='responsive body1'>
      <h4>TL;DR</h4>
      <p>I designed the UI for several pages for a real estate company in Dubai showcasing their latest real estate
        projects.</p>
      <h4>Problem</h4>
      <p>The initial design draft failed to portray the real estate projects in an appealing and professional manner.
        Although the imagery was generally captivating, the content lacked structure, and there were layout issues that
        compromised its professional presentation.</p>
      <styled-image :src='buildURL("dubai/aeternitas-hero.png")' alt="Issues with the hero section" :shadow="false" />
      <styled-image :src='buildURL("dubai/aeternitas-approach.png")' alt="Issues with the approach section"
        :shadow="false" />
      <h4>Structure</h4>
      <p>My goal with the design was to make the pages more easily understandable and guaranteeing that the impressive
        projects stand out. I structured the content into three new sections:</p>
      <h6>Project</h6>
      <p>This section showcases the iconic and spectacular nature of the project with a big hero image of the project. The
        goal of this section is to draw the visitor in to learn more about the project.</p>
      <h6>Property</h6>
      <p>This section shows the luxurious property with a carousel filled with pictures from interior and exterior. Also,
        the payment plan shows the attractiveness of the investment. The goal of this section was to show the visitor what
        they would by buying into this project and how affordable the conditions are.</p>
      <h6>Neighborhood</h6>
      <p>This section shows the surroundings and gives a feel for the atmosphere.</p>
      <h4>Design</h4>
      <styled-image :src='buildURL("dubai/1-venice.jpeg")'
        alt="Design for Venice with the three sections and the footer" />
      <h4>Development</h4>
      <p>Nicolas Kopp from <a class="link" href="https://www.digitalessence.de/">digitalessence</a> developed the site
        with Wordpress DIVI.</p>
      <Button type="primary" bg="light" size='sm' text='Visit the page' href='https://www.gravitas-dubai.com/'>
        <img :src="buildURL('dubai/Gravitas-Logo-Light.png')" />
      </Button>
			<styled-image :src="buildURL('dubai/eywa-2.webm')" alt='Project Heimat' />
    </div>
    <project-arrows :route='"/dubai"'></project-arrows>
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