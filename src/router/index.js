import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/content/LandingPage.vue'
import Phoenix from '@/components/projects/Phoenix.vue'
import Greenbox from '@/components/projects/Greenbox.vue'
import QueryBuilder from '@/components/projects/QueryBuilder.vue'
import CodeSnippets from '@/components/projects/CodeSnippets.vue'
import KnimeHub from '@/components/projects/KnimeHub.vue'
import Mechanics from '@/components/projects/Mechanics.vue'
import Thesis from '@/components/projects/Thesis.vue'
import About from '@/components/content/About.vue'
import Legal from '@/components/content/Legal.vue'
import PageNotFound from '@/components/content/PageNotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: LandingPage },
        { path: '/phoenix', component: Phoenix },
        { path: '/greenbox', component: Greenbox },
        { path: '/querybuilder', component: QueryBuilder },
        { path: '/codesnippets', component: CodeSnippets },
        { path: '/knimehub', component: KnimeHub },
        { path: '/mechanics', component: Mechanics },
        { path: '/thesis', component: Thesis },
        { path: '/about', component: About },
        { path: '/legal', component: Legal},
        { path: '*', component: PageNotFound}
    ],
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
