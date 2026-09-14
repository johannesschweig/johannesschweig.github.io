import { projData } from './projects.js'

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

// returns a URL for static assets, e.g. images or pdfs
export function buildURL(src) {
  return new URL(`/src/assets/${src}`, import.meta.url).href;
}

