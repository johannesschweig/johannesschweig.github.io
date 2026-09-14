// data for the projects
export const projData = [
  {
    route: '/pms',
    image: {
      src: 'pms/hero.webp',
      alt: 'Illustration of legacy devices connecting through a unified platform into the cloud',
    },
    name: 'EVEX Group PMS Platform',
    slogan: 'A cloud-native practice management platform for opticians and hearing acousticians',
    clients: ['EVEX Group'],
    task: 'Product Ownership',
    industry: 'HealthTech',
    date: 'Aug 2026 – Present',
  },
  {
    route: '/proptech',
    image: {
      src: 'proptech/app-mockup.png',
      alt: 'Design for a property management system',
    },
    name: 'Property Management Software',
    slogan: 'Creating clear software for property management',
    clients: ['N3XTUP', 'UG Phillipp GmbH'],
    task: 'UX/UI Design',
    industry: 'PropTech',
    date: 'Feb-Sept 2026',
  },
  {
    route: '/scenariomanager',
    image: {
      src: 'scenariomanager/brainstorming-sideshot.jpg',
      alt: 'Scenario Manager UI'
    },
    name: 'Scenario Manager',
    slogan: 'Helping financial decision makers in stormy times',
    clients: ['Valsight'],
    task: 'UX Research',
    industry: 'Finance',
    date: 'Jan-Mar 2020',
    active: false, // hidden from the landing page, still reachable via its route
  },
]

// projectRoutes (all project routes with landing page)
export const projectRoutes = projData.map(e => e.route).concat(['/'])
