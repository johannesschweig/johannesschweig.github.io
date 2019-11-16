<template>
  <div id="preview">
    <WelcomeBanner />
    <ProjectPreview
      v-for='e in projects'
      :key='e.id'
      :projProps='e' />
    <Bio />
  </div>
</template>

<script>
import ProjectPreview from '../elements/ProjectPreview'
import Bio from '../content/Bio'
import { activeRoutes }  from '../../utils/projects'
import WelcomeBanner from './WelcomeBanner'

export default {
  components: {
    ProjectPreview,
    Bio,
    WelcomeBanner
  },
  data () {
    return {
      // json with project data
      projects: activeRoutes
    }
  }
}
</script>
