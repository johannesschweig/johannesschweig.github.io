<template>
  <div
    id='project-header'
    class='responsive'>
    <div id='name-container'>
      <div class='subtitle1'>{{ project.name }}</div>
      <h2>{{ project.slogan }}</h2>
    </div>
    <div id='heading-container'>
      <div class='subtitle1'> Client </div>
      <h5>
        <div
        :key='c'
        v-for='c in project.clients'>
        {{ c }}
        </div>
      </h5>
      <div class='subtitle1'> Task </div>
      <h5>{{ project.task }}</h5>
      <div class='subtitle1'> Timeline </div>
      <h5>{{ project.date }}</h5>
    </div>
  </div>
</template>

<script>
import { projData } from '../../utils/projects.js'

export default {
  data() {
    return {
      project: null
    }
  },
  props: {
    route: {
      type: String,
      required: true
    }
  },
  // check which project this ProjectHeader belongs to
  created() {
    this.project = projData.filter((e) => e.route == this.$props.route)[0]
  }
}
</script>

<style scoped>

.responsive {
  padding-top: 64px;
  padding-bottom: 32px;
}

h2, h5 {
  margin: 0;
}

#name-container {
  margin-bottom: 32px;
}

#heading-container {
  display: grid;
  grid-template-rows: 1fr 3fr;
  row-gap: 4px;
  grid-auto-flow: column;
  max-width: 700px;
  justify-content: space-between;
}


@media screen and (max-width: 768px) {
  #heading-container {
    row-gap: 0px;
  }

  h2 {
    font-size: var(--size-h3);
  }

  h5 {
    font-size: var(--size-h6)
  }

  .subtitle1 {
    font-size: var(--size-sub2);
  }
}
</style>
