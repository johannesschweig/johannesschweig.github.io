import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/content/About.vue'
import CodeSnippets from '@/components/projects/CodeSnippets.vue'
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

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: LandingPage },
        { path: '/about', component: About },
        { path: '/codesnippets', component: CodeSnippets },
        { path: '/esgehtlos', component: EsGehtLos },
        { path: '/greenbox', component: Greenbox },
        { path: '/knimehub', component: KnimeHub },
        { path: '/legal', component: Legal},
        { path: '/mechanics', component: Mechanics },
        { path: '/phoenix', component: Phoenix },
        { path: '/querybuilder', component: QueryBuilder },
        { path: '/scenariomanager', component: ScenarioManager },
        { path: '/thesis', component: Thesis },
        { path: '/trafficticket', component: TrafficTicket },
        { path: '*', component: PageNotFound}
    ],
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
