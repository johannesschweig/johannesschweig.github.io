import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/components/content/LandingPage.vue') },
    { path: '/about', component: () => import('@/components/content/About.vue') },
    { path: '/businesshub', component: () => import('@/components/projects/Businesshub.vue') },
    { path: '/codesnippets', component: () => import('@/components/projects/CodeSnippets.vue') },
    { path: '/dubai', component: () => import('@/components/projects/Dubai.vue') },
    { path: '/esgehtlos', component: () => import('@/components/projects/EsGehtLos.vue') },
    { path: '/greenbox', component: () => import('@/components/projects/Greenbox.vue') },
    { path: '/knimehub', component: () => import('@/components/projects/KnimeHub.vue') },
    { path: '/legal', component: () => import('@/components/content/Legal.vue') },
    { path: '/mechanics', component: () => import('@/components/projects/Mechanics.vue') },
    { path: '/phoenix', component: () => import('@/components/projects/Phoenix.vue') },
    { path: '/querybuilder', component: () => import('@/components/projects/QueryBuilder.vue') },
    { path: '/scenariomanager', component: () => import('@/components/projects/ScenarioManager.vue') },
    { path: '/thesis', component: () => import('@/components/projects/Thesis.vue') },
    { path: '/trafficticket', component: () => import('@/components/projects/TrafficTicket.vue') },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: () => import('@/components/content/PageNotFound.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
