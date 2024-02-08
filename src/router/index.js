import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/content/About.vue'
import CodeSnippets from '@/components/projects/CodeSnippets.vue'
import Dubai from "@/components/projects/Dubai.vue"
import EsGehtLos from '@/components/projects/EsGehtLos.vue'
import Greenbox from '@/components/projects/Greenbox.vue'
import KnimeHub from '@/components/projects/KnimeHub.vue'
import LandingPage from '@/components/content/LandingPage.vue'
import Legal from '@/components/content/Legal.vue'
import Mechanics from '@/components/projects/Mechanics.vue'
import PageNotFound from '@/components/content/PageNotFound.vue'
import Phoenix from '@/components/projects/Phoenix.vue'
import QueryBuilder from '@/components/projects/QueryBuilder.vue'
import ScenarioManager from '@/components/projects/ScenarioManager.vue'
import Thesis from '@/components/projects/Thesis.vue'
import TrafficTicket from '@/components/projects/TrafficTicket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/about', component: About },
    { path: '/codesnippets', component: CodeSnippets },
    { path: '/dubai', component: Dubai },
    { path: '/esgehtlos', component: EsGehtLos },
    { path: '/greenbox', component: Greenbox },
    { path: '/knimehub', component: KnimeHub },
    { path: '/legal', component: Legal },
    { path: '/mechanics', component: Mechanics },
    { path: '/phoenix', component: Phoenix },
    { path: '/querybuilder', component: QueryBuilder },
    { path: '/scenariomanager', component: ScenarioManager },
    { path: '/thesis', component: Thesis },
    { path: '/trafficticket', component: TrafficTicket },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: PageNotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

})

export default router
