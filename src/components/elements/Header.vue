<template>
    <div id="header">
        <div
          id='grid'
          class='responsive'>
            <router-link
              id='name'
              class='h6sans'
              to='/'>
              Johannes Schweig
            </router-link>
            <router-link
              id='work'
              to='/'
              :class='["h6sans", {"active": projectRoutes.indexOf($route.path) != -1 }]'>
              Work
            </router-link>
            <router-link
              id='about'
              to='/about'
              :class='["h6sans", {"active": $route.path === "/about"}]'>
              About
            </router-link>
        </div>
    </div>
</template>

<script>
import { projectRoutes } from '../../utils/projects'

export default {
  data() {
    return {
      projectRoutes
    }
  }
}
</script>

<style scoped>
#header {
  height: 64px;
  width: 100%;
  box-shadow: var(--shadow);
	background-color: white;
}

#grid {
  /* padding for right links*/
  --pad: 12px;
  display: grid;
  /* 30px left padding, size of name, free growing space, size of right links + padding, right padding  */
  grid-template-columns: 200px 1fr 100px 100px;
}


#name {
  grid-column: 1 / 2;
  color: var(--dark);
	line-height: 64px;
}

#work {
  grid-column: 3 / 4;
}

#work,
#about {
  color: var(--light);
  text-align: center;
	line-height: 62px;
  background: linear-gradient(to bottom, white 50%, var(--light-blue) 50%);
  background-size: 100% 200%;
  background-position:left top;
  transition:all .15s ease;
}

#work:hover,
#about:hover {
  color: var(--blue);
  background-position:left bottom;
}

#work.active,
#about.active {
  color: var(--blue);
  border-bottom: 2px solid var(--blue);
}

.h6sans {
  margin: 0;
}
</style>
