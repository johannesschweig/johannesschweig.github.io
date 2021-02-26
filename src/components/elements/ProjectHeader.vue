<template>
  <div id='project-header'>
    <div class='responsive'>
      <div id='name-container'>
        <div id='name'>{{ project.name }}</div>
        <div id='slogan'>{{ project.slogan }}</div>
      </div>
      <div id='heading-container'>
        <div class='heading'> Client </div>
        <div id='client'>{{ project.client }}</div>
        <div class='heading'> Task </div>
        <div id='task'>{{ project.task }}</div>
        <div class='heading'> Timeline </div>
        <div id='date'>{{ project.date }}</div>
      </div>
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

#project-header {
  margin-bottom: 50px
}

.responsive {
  padding-top: 74px;
  padding-bottom: 74px;
  display: grid;
}



#name, .heading {
  color: var(--light);
  font-weight: bold;
}





@media screen and (min-width: 768px) {
  #slogan {
    font-size: 48px;
  }
  .responsive {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 24px;
    display: grid;
  }

  #name-container {
    grid-column: 1 / 2;
  }

  #heading-container {
    grid-column: 2 / 3;
  }

  #client, #task, #date {
    font-size: 20px;
  }

  #name, .heading {
    font-size: 18px;
  }

  #client, #task {
    padding-bottom: 8px;
  }
}

@media screen and (max-width: 768px) {
  #slogan {
    font-size: 36px;
  }

  #client, #task, #date {
    font-size: 18px;
  }

  #name, .heading {
    font-size: 16px;
  }
  #heading-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
    padding-top: 24px;
  }
}
</style>
