<template>
    <div id='projectArrows' class='responsive'>
        <router-link :to='previousProject.route'> << Previous project: {{ previousProject.name }}</router-link>
        <router-link :to='nextProject.route'>Next project: {{ nextProject.name }} >> </router-link>
    </div>
</template>

<script>
import { projData } from '../../utils/projects.js'
import getProjectNameFromRoute from '../../utils/index.js'

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
        // find index of current project
        let found;
        for (let i = 0; i < projData.length; i++) {
            if (projData[i].route == this.$props.route) {
                found = i
                break
            }
        }
        let previous = found - 1
        let next = found + 1
        //TODO make this more elegant
        if (previous == -1) {
            previous = projData.length - 1
        }
        if (next == projData.length) {
            next = 0
        }
        this.previousProject = {route: projData[previous].route, name: getProjectNameFromRoute(projData[previous].route)}
        this.nextProject = {route: projData[next].route, name: getProjectNameFromRoute(projData[next].route)}
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
