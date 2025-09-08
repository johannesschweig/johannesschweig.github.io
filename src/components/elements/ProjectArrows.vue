<template>
  <div class='responsive py-12 flex text-xl text-blue-200'>
    <router-link
      v-if="previousProject.route"
      class='previous flex items-center py-1.5 px-4 border border-blue-200 rounded-lg hover:text-white active:text-white transition-all duration-250'
      :to='previousProject.route'>
      <Arrow class="mr-2"/>
      <span>
        <span class="hidden md:inline-block">Previous project:</span>
        {{ previousProject.name }}
      </span>
    </router-link>
    <div class='flex-grow'></div>
    <router-link
      v-if="nextProject.route"
      class='next flex items-center py-1.5 px-4 border border-blue-200 rounded-lg hover:text-white active:text-white transition-all duration-250'
      :to='nextProject.route'>
      <span>
        <span class="hidden md:inline-block">Next project:</span>
        {{ nextProject.name }}
      </span>
      <Arrow class="ml-2 rotate-180"/>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPreviousNextProjects } from '@/utils/index.js'
import Arrow from '@/assets/arrow.svg'

const previousProject = ref({ route: null, name: null })
const nextProject = ref({ route: null, name: null })
const route = useRoute()

onMounted(() => {
  const { previous, next } = getPreviousNextProjects(route.path)
  previousProject.value = previous
  nextProject.value = next
})
</script>

<style scoped>
svg >>> path {
  fill: var(--blue-200);
}

a:hover svg >>> path {
  fill: white;
}

.previous { 
  background: linear-gradient(to right, transparent 50%, var(--blue-200) 50%);
  background-position: left top;
  background-size: 200% 100%;
}

.previous:hover {
  background-position: right top;
}

.next {
  background: linear-gradient(to left, transparent 50%, var(--blue-200) 50%);
  background-position: right top;
  float: right;
  background-size: 200% 100%;
}

.next:hover {
  background-position: left top;
}

#projectArrows > a:active {
  background-color: var(--blue-200);
  color: white;
}
</style>
