<template>
  <div
    class='responsive pt-4 pb-2 md:pt-16 md:pb-4'>
    <div class='mb-8'>
      <div class='text-dark-300 text-sm md:text-base'>{{ project.name }}</div>
      <h1 class="text-4xl leading-12 md:text-6xl md:leading-20 font-medium">{{ project.slogan }}</h1>
    </div>
    <div class='grid grid-rows-[1fr_3fr] md:gap-y-1 gap-x-8 grid-flow-col'>
      <div class='text-dark-300 text-sm md:text-base'>Client</div>
      <h3 class='text-lg md:text-2xl font-medium'>
        <div
        :key='c'
        v-for='c in project.clients'>
        {{ c }}
        </div>
      </h3>
      <div class='text-dark-300 text-sm md:text-base'>Task</div>
      <h3 class="text-lg md:text-2xl font-medium">{{ project.task }}</h3>
      <div class='text-dark-300 text-sm md:text-base'>Timeline</div>
      <h3 class="text-lg md:text-2xl font-medium">{{ project.date }}</h3>
    </div>
  </div>
</template>

<script>
import { projData } from '@/utils/projects.js'

export default {
  data() {
    return {
      project: null
    }
  },
  // check which project this ProjectHeader belongs to
  created() {
    this.project = projData.filter((e) => e.route == this.$route.path)[0]
  }
}
</script>