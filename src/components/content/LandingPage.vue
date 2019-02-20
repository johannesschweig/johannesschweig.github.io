<template>
    <div id="preview">
        <!-- Welcome -->
        <div id="welcome">
            <div class='responsive'>
                <div> Hi,</div>
                <div>I am Johannes, a UX Designer based in Berlin, and this is my work.</div>
            </div>
        </div>
        <!-- Projects -->
        <project-preview v-for='e in projects' :key='e.id' :projProps='e'></project-preview>
        <!-- Bio -->
        <bio />
    </div>
</template>

<script>
import ProjectPreview from '../elements/ProjectPreview.vue'
import Bio from '../content/Bio.vue'
import { projData }  from '../../utils/projects.js'

export default {
    components: {
        'project-preview': ProjectPreview,
        'bio': Bio
    },
    data () {
        return {
            // whether the email img in the bio section is shown
            showEmail: false,
            // json with project data
            projects: projData
        }
    }
}
</script>

<style scoped>


#welcome{
    color: var(--dark);
    padding-bottom: 72px;
    background-image: url('../../assets/pattern.png');
    background-position: -150px bottom;
    background-repeat: repeat;
}

#welcome > div{
    padding-top: calc(50px + 32px);
    font-size: 48px;
}

#welcome div div:nth-child(1) {
    padding-bottom: 24px;
}

@media screen and (max-width: 768px) {
    #welcome > div {
        padding-top: calc(50px + 18px);
        font-size: 36px;
    }

    #welcome div div:nth-child(1) {
        padding-bottom: 18px;
    }
}

</style>
