<template>
  <!-- TODO: somehow the margin of the heading is not respected -->
  <div class="py-px">
    <div id='projects' class="responsive">
      <h2 class="text-3xl font-medium mt-10 mb-8 text-dark-100">
        Recent projects
      </h2>
      <div class='general-grid'>
        <ProjectPreview v-for='e in routes' :key='e.id' :projProps='e' />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPreview from '@/components/elements/ProjectPreview.vue'
import { projData } from '@/utils/projects.js'

export default {
  components: {
    ProjectPreview,
  },
  data() {
    return {
      // whether to display all projects
      projectsClicked: 0
    }
  },
  computed: {
    routes() {
      return projData
    },
  }
}
</script>