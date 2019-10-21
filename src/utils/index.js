import { namedRoutes, activeRoutes } from './projects.js'

// returns the name of the project from a route (e.g. '/phoenix' -> Phoenix)
export function getProjectNameFromRoute(route) {
    // remove trailing /
    if (route !== '/' & route.slice(-1) === '/') {
      route = route.slice(0, -1)
    }
    // check for known routes
    let names = namedRoutes.filter(obj => obj.route === route)
    if (names.length) {
        return names[0].name
    } else {
        // for 404 routes
        return '404'
    }
}

// returns the route and name of the previous and the next project
export function getPreviousNextProjects(route) {
    // find index of current project
    // by default found is the last project (e.g. inactive ones)
    let found = activeRoutes.length;
    for (let i = 0; i < activeRoutes.length; i++) {
        if (activeRoutes[i].route == route) {
            found = i
            break
        }
    }
    let previous = found - 1
    let next = found + 1
    //TODO make this more elegant
    if (previous == -1) {
        previous = activeRoutes.length - 1
    }
    if (next >= activeRoutes.length) {
        next = 0
    }
    let previousProject = { route: activeRoutes[previous].route, name: getProjectNameFromRoute(activeRoutes[previous].route) }
    let nextProject = { route: activeRoutes[next].route, name: getProjectNameFromRoute(activeRoutes[next].route) }
    return {
      previous: previousProject,
      next: nextProject
    }
}