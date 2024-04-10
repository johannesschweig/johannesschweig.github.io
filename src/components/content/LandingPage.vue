<template>
  <div>
    <WelcomeBanner />
    <Believes />
    <div id='projects' class="responsive">
      <h4>Projects</h4>
      <div class='grid'>
        <ProjectPreview v-for='e in activeRoutes' :key='e.id' :projProps='e' />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPreview from '@/components/elements/ProjectPreview.vue'
import { activeRoutes } from '../../utils/projects.js'
import WelcomeBanner from './WelcomeBanner.vue'
import Believes from './Believes.vue'

export default {
  components: {
    Believes,
    ProjectPreview,
    WelcomeBanner
  },
  data() {
    return {
      // json with project data
      activeRoutes
    }
  }
}
</script>

<style scoped>
h4 {
  margin-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 100px;
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>