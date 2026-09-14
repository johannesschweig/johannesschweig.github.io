<template>
  <nav
    class='responsive w-full text-zinc-500 text-base h-20 grid items-center grid-cols-[auto_1fr_100px] md:grid-cols-[auto_1fr_100px_100px] gap-3'>
    <router-link to='/' class="flex items-center gap-3 text-zinc-900 font-medium">
      <span class="flex items-center justify-center w-9 h-9 bg-zinc-900 text-white text-sm font-semibold shrink-0">JS</span>
      <span class="hidden sm:inline">Johannes Schweig</span>
    </router-link>
    <div></div>
    <router-link to='/' :class='[" hidden md:block justify-self-end hover:text-zinc-900 active:text-zinc-900 font-medium transition-colors duration-150 ease-in-out", { "text-blue-500": projectRoutes.indexOf($route.path) != -1 }]'>
      Home
    </router-link>
    <router-link to='/about' :class='["justify-self-end hover:text-zinc-900 active:text-zinc-900 font-medium transition-colors duration-150 ease-in-out",{ "text-blue-500": $route.path === "/about" }]'>
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