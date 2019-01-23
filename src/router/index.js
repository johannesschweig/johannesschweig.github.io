import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Phoenix from '@/components/projects/Phoenix.vue'
import Greenbox from '@/components/projects/Greenbox.vue'
import QueryBuilder from '@/components/projects/QueryBuilder.vue'
import CodeSnippets from '@/components/projects/CodeSnippets.vue'
import Legal from '@/components/projects/Legal.vue'
import PageNotFound from '@/components/projects/PageNotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: LandingPage },
        { path: '/phoenix', component: Phoenix },
        { path: '/greenbox', component: Greenbox },
        { path: '/querybuilder', component: QueryBuilder },
        { path: '/codesnippets', component: CodeSnippets },
        { path: '/legal', component: Legal},
        { path: '*', component: PageNotFound}
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
