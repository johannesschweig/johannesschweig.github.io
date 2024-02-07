<template>
  <div>
    <WelcomeBanner />
    <div
      id='projects'
      class='responsive'>
      <ProjectPreview
        v-for='e in activeRoutes'
        :key='e.id'
        :projProps='e' />
    </div>
  </div>
</template>

<script>
import ProjectPreview from '@/components/elements/ProjectPreview.vue'
import { activeRoutes }  from '../../utils/projects.js'
import WelcomeBanner from './WelcomeBanner.vue'

export default {
  components: {
    ProjectPreview,
    WelcomeBanner
  },
  data () {
    return {
      // json with project data
      activeRoutes
    }
  }
}
</script>

<style scoped>
#projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 100px;
}

@media screen and (min-width: 768px) {
  #projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>