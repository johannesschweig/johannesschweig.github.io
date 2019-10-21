<template>
    <div id='projectArrows' class='responsive'>
        <router-link :to='previousProject.route'> ← Previous project: {{ previousProject.name }}</router-link>
        <router-link :to='nextProject.route'>Next project: {{ nextProject.name }} → </router-link>
    </div>
</template>

<script>
import { getPreviousNextProjects } from '../../utils/index.js'

export default {
    data() {
        return {
            previousProject: {route: null, name: null},
            nextProject: {route: null, name: null},
        }
    },
    props: {
        route: {
            type: String,
            required: true
        }
    },
    // check which project this component belongs to and find the previous/next project
    created() {
        let previousNext = getPreviousNextProjects(this.route)
        this.previousProject = previousNext.previous
        this.nextProject = previousNext.next
    }
}
</script>

<style scoped>
    #projectArrows {
        margin-bottom: 32px;
    }

    a:nth-child(2) {
        float: right;
    }
</style>
