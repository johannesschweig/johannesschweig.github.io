import { projData } from './projects.js'
// the known routes
let knownRoutes = projData.map(project => project.route)
// add / and legal
knownRoutes.unshift('/')
knownRoutes.push('/legal')

// returns the name of the project from a route (e.g. '/phoenix' -> Phoenix)
export default function getProjectNameFromRoute(route) {
    // shorten routes with double slashes
    if (route.length > 1 && route.slice(-1) == '/') {
        route = route.slice(0, -1)
    }
    // check for known routes
    if (knownRoutes.indexOf(route) != -1) {
        if (route == '/') {
            // for top-level
            return 'Portfolio'
        } else {
            // for project routes
            return route.charAt(1).toUpperCase() + route.slice(2)
        }
    } else {
        // for 404 routes
        return '404'
    }
}
