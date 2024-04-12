<template>
    <div id="header">
        <div
          id='grid'
          class='responsive h6 regular'>
            <router-link
              id='name'
              to='/'>
              Johannes Schweig
            </router-link>
            <router-link
              id='work'
              to='/'
              :class='[{"active": projectRoutes.indexOf($route.path) != -1 }]'>
              Home
            </router-link>
            <router-link
              id='about'
              to='/about'
              :class='[{"active": $route.path === "/about"}]'>
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
}

#grid {
  /* padding for right links*/
  --pad: 12px;
  display: grid;
  /* 30px left padding, size of name, free growing space, size of right links + padding, right padding  */
  grid-template-columns: 180px 1fr 100px 100px;
}


#name {
  grid-column: 1 / 2;
  color: var(--dark-300);
	line-height: 64px;
}

#work {
  grid-column: 3 / 4;
}

#work,
#about {
  color: var(--dark-300);
  text-align: center;
	line-height: 62px;
  transition:all .15s ease;
}

#work:hover,
#about:hover,
#work.active,
#about.active {
  color: var(--blue-100);
  font-weight: 500;
}

</style>
