import { projData, namedRoutes, activeRoutes } from '@/utils/projects.js'
import { getProjectNameFromRoute, getPreviousNextProjects } from '@/utils/index.js'

// required props for projects
const requiredProps = ['route', 'image', 'name', 'slogan', 'clients', 'task', 'date', 'active' ]

describe('utils/index.js', () => {
  it('returns names to routes', () => {
    // check project routes
    for (let i = 0; i < projData.length; i++) {
      requiredProps.forEach(p => expect(projData[i].hasOwnProperty(p)).toEqual(true))
      expect(getProjectNameFromRoute(projData[i].route)).toEqual(projData[i].name)
      expect(getProjectNameFromRoute(projData[i].route + '/')).toEqual(projData[i].name)
    }
    // check 404
    expect(getProjectNameFromRoute('foo')).toEqual('404')
    // check root
    expect(getProjectNameFromRoute('/')).toEqual('Portfolio')
    // check legal
    expect(getProjectNameFromRoute('/legal')).toEqual('Legal')
  })

  it('returns previous and next projects', () => {
    // check active routes
    let previousNext
    for (let i = 0; i < activeRoutes.length; i++) {
      let previous = i - 1 === -1 ? activeRoutes.slice(-1)[0] : activeRoutes[i - 1]
      previous = { route: previous.route, name: previous.name }
      let next = i + 1 >= activeRoutes.length ? activeRoutes[0] : activeRoutes[i + 1]
      next = { route: next.route, name: next.name }

      previousNext = {
        previous, 
        next
      }
      expect(getPreviousNextProjects(activeRoutes[i].route)).toEqual(previousNext)
    }

    // inactive routes and unknown routes
    let inactiveRoutes = projData.filter(e => !e.active).concat([{ route: 'foo' }])
    // previous = last, next = first
    previousNext = {
      previous: {
        route: activeRoutes.slice(-1)[0].route,
        name: activeRoutes.slice(-1)[0].name,
      },
      next: {
        route: activeRoutes[0].route,
        name: activeRoutes[0].name,
      }
    }
    for (let i = 0; i < inactiveRoutes.length; i++) {
      expect(getPreviousNextProjects(inactiveRoutes[i].route)).toEqual(previousNext)
    }
  })

  it('returns active routes', () => {
    for (let i = 0; i < activeRoutes.length; i++) {
      expect(activeRoutes[i].active).toEqual(true)
    }
  })

  it('returns named routes', () => {
    // contains root and legal route
    for (let i = 0; i < namedRoutes.length; i++) {
      expect(namedRoutes[i].hasOwnProperty('name')).toEqual(true)
      expect(namedRoutes[i].hasOwnProperty('route')).toEqual(true)
      // root route
      if (namedRoutes[i].route === '/') {
        expect(namedRoutes[i].name).toEqual('Portfolio')
      }
      // legal route
      if (namedRoutes[i].route === '/legal') {
        expect(namedRoutes[i].name).toEqual('Legal')
      }
    }
  })
})
