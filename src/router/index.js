import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/components/content/LandingPage.vue') },
    { path: '/about', component: () => import('@/components/content/About.vue') },
    { path: '/proptech', component: () => import('@/components/projects/PropTech.vue') },
    { path: '/pms', component: () => import('@/components/projects/Pms.vue') },
    { path: '/scenariomanager', component: () => import('@/components/projects/ScenarioManager.vue') },
    { path: '/legal', component: () => import('@/components/content/Legal.vue') },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: () => import('@/components/content/PageNotFound.vue') },
  ],
  scrollBehavior(_to, _from, _savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
