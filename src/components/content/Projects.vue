<template>
  <!-- TODO: somehow the margin of the heading is not respected -->
  <div class="bg-dark-100 py-px">
    <div id='projects' class="responsive">
      <h2 @click="clickProjects()" class="text-3xl font-medium mt-10 mb-8 text-white">
        {{ projectsClicked > 2 ? "All " : "My" }}
        projects
      </h2>
      <div class='general-grid'>
        <ProjectPreview v-for='e in routes' :key='e.id' :projProps='e' />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPreview from '@/components/elements/ProjectPreview.vue'
import { activeRoutes, projData } from '@/utils/projects.js'

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
    // json with project data
    routes() {
      return this.projectsClicked > 2 ? projData : activeRoutes
    },
  },
  methods: {
    clickProjects() {
      this.projectsClicked++
    }
  }
}
</script>