<template>
  <!-- TODO: somehow the margin of the heading is not respected -->
  <div class="py-px">
    <div id='projects' class="responsive">
      <div class="flex items-center gap-3 mt-10 mb-4">
        <span class="w-6 h-px bg-blue-500"></span>
        <span class="text-xs md:text-sm font-medium tracking-widest text-blue-500 uppercase">Selected work</span>
      </div>
      <h2 class="text-3xl font-extrabold mb-8 text-zinc-900 max-w-2xl">
        Recent projects
      </h2>
      <div class='grid grid-cols-1 md:grid-cols-2 gap-8 mb-24'>
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
      return projData.filter(e => e.active !== false)
    },
  }
}
</script>