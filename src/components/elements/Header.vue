<template>
    <div id="header">
        <div id='grid' class='responsive'>
            <router-link id='name' to='/'>Johannes Schweig</router-link>
            <span id='project' v-html='getProjectName()'/>
        </div>
    </div>
</template>

<script>
import { getProjectNameFromRoute } from '../../utils/index.js'

export default {
    data () {
        return {
            //whether the email is shown
            showEmail: false
        }
    },
    methods: {
        getProjectName() {
            return getProjectNameFromRoute(this.$route.path)
        }
    }
}
</script>

<style scoped>

#header {
  height: 50px;
  width: 100%;
  box-shadow: 0 3px 2px -2px #cccccc;
	z-index: 999;
	background-color: white;
}

#grid {
  /* padding for right links*/
  --pad: 12px;
  display: grid;
  /* 30px left padding, size of name, free growing space, size of right links + padding, right padding  */
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 50px;
}

#name {
  grid-column: 1 / 1;
  color: var(--dark);
	font-size: 20px;
	line-height: 50px;
}

#project {
	font-size: 20px;
	line-height: 50px;
  grid-column: 3 / 4;
	color: var(--light);
  text-align: right;
}

@media screen and (max-width: 768px) {
    #project {
        display: none;
    }
}
</style>
