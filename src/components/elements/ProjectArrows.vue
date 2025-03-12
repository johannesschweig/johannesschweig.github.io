<template>
  <div id='projectArrows' class='responsive'>
    <router-link
      v-if="previousProject.route"
      class='previous'
      :to='previousProject.route'>
      <Arrow />
      <span>Previous project: {{ previousProject.name }}</span>
    </router-link>
    <div class='flex-grow'></div>
    <router-link
      v-if="nextProject.route"
      class='next'
      :to='nextProject.route'>
      <span>Next project: {{ nextProject.name }}</span>
      <Arrow />
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPreviousNextProjects } from '@/utils/index.js'
import Arrow from '@/assets/arrow.svg'

const props = defineProps({
  route: {
    type: String,
    required: true
  }
})

const previousProject = ref({ route: null, name: null })
const nextProject = ref({ route: null, name: null })

onMounted(() => {
  const { previous, next } = getPreviousNextProjects(props.route)
  previousProject.value = previous
  nextProject.value = next
})
</script>


<style scoped>
#projectArrows {
  margin-top: 64px;
  margin-bottom: 64px;
  display: flex;
}

#projectArrows > a {
  font-size: var(--size-h6);
  color: var(--blue-200);
  border-radius: var(--radius);
  border: 1px solid var(--blue-200);
  padding: 6px 16px;
  background-size: 200% 100%;
  transition: all .15s ease;
}

#projectArrows *:first-child {
  margin-right: 8px;
}

#projectArrows > a:hover {
  color: white;
}

svg >>> path{
  fill: var(--blue-200);
  transition: all .15s ease;
}

.previous {
  background: linear-gradient(to right, transparent 50%, var(--blue-200) 50%);
  background-position: left top;
}

.previous:hover {
  background-position: right top;
}

.next {
  background: linear-gradient(to left, transparent 50%, var(--blue-200) 50%);
  background-position: right top;
  float: right;
}

.next > svg {
  transform: rotate(180deg);
}

.next:hover {
  background-position: left top;
}

#projectArrows > a:active {
  background-color: var(--blue-200);
  color: white;
}

a:hover svg >>> path{
  fill: white;
}

.flex-grow {
  flex-grow: 1;
}

</style>
