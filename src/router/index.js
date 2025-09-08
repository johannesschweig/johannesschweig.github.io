import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/components/content/LandingPage.vue') },
    { path: '/about', component: () => import('@/components/content/About.vue') },
    { path: '/proptech', component: () => import('@/components/projects/PropTech.vue') },
    { path: '/businesshub', component: () => import('@/components/projects/Businesshub.vue') },
    { path: '/dubai', component: () => import('@/components/projects/Dubai.vue') },
    { path: '/esgehtlos', component: () => import('@/components/projects/EsGehtLos.vue') },
    { path: '/legal', component: () => import('@/components/content/Legal.vue') },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: () => import('@/components/content/PageNotFound.vue') },
  ],
  scrollBehavior(_to, _from, _savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
