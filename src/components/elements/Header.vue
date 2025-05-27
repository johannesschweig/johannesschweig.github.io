<template>
  <nav
    class='responsive w-full text-dark-300 text-xl h-16 grid items-center grid-cols-[180px_1fr_100px] md:grid-cols-[180px_1fr_100px_100px]'>
    <router-link to='/' class="">
      Johannes Schweig
    </router-link>
    <div></div>
    <router-link to='/' :class='[" hidden md:block justify-self-end hover:text-blue-100 active:text-blue-100 hover:font-medium active:font-medium transition-all duration-100 ease-in-out", { "text-blue-100 font-medium": projectRoutes.indexOf($route.path) != -1 }]'>
      Home
    </router-link>
    <router-link to='/about' :class='["justify-self-end hover:text-blue-100 active:text-blue-100 hover:font-medium active:font-medium transition-all duration-100 ease-in-out",{ "text-blue-100 font-medium": $route.path === "/about" }]'>
      About
    </router-link>
  </nav>
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