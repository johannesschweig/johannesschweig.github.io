import { projData, activeRoutes } from './projects.js'

// returns the name of the project from a route (e.g. '/phoenix' -> Phoenix)
export function getProjectNameFromRoute(route) {
  // remove trailing /
  if (route !== '/' & route.slice(-1) === '/') {
    route = route.slice(0, -1)
  }
  // check for known routes
  let names = projData.filter(obj => obj.route === route)
  if (names.length) {
    return names[0]
  } else {
    // for 404 routes
    return '404'
  }
}

// returns a correct modulo
function getMod(i, j) {
  return ((i % j) + j) % j
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
  let previous = getMod(found - 1, activeRoutes.length)
  let next = getMod(found + 1, activeRoutes.length)

  return {
    previous: activeRoutes[previous],
    next: activeRoutes[next]
  }
}

// returns a URL for static assets, e.g. images or pdfs
export function buildURL(src) {
  return new URL(`/src/assets/${src}`, import.meta.url).href;
}

