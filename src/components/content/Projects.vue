<template>
  <div class="wrapper">
    <div id='projects' class="responsive">
      <h4 @click="clickProjects()">
        {{ projectsClicked > 2 ? "All " : "" }}
        Projects
      </h4>
      <div class='grid'>
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

<style scoped>
.wrapper {
  background-color: var(--dark-100);
  padding-top: 1px;
  padding-bottom: 1px;
}

h4 {
  color: white;
  margin-bottom: 32px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 100px;
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>