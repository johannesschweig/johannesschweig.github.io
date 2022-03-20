// data for the projects
export const projData = [
  {
    route: '/esgehtlos',
    image: {
      src: 'esgehtlos/demo.png',
      alt: 'Screen design for mobile web app'
    },
    name: 'Es geht los',
    slogan: 'More democracy with civic councils',
    clients: ['MaibornWolff', 'Demokratie Innovation e. V.'],
    task: 'UI Design',
    date: 'Jan-Feb 2022',
    active: true
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
    date: 'Jan-Mar 2020',
    active: true // active projects are shown on the landing page, inactive ones are only accessible by route
  },
  {
    route: '/knimehub',
    image: {
      src: 'knimehub/front_page.jpg',
      alt: 'Screenshot of the landing page of KNIME hub'
    },
    name: 'KNIME Hub',
    slogan: 'Collaborative platform for data scientists',
    clients: ['KNIME'],
    task: 'UI/UX Design',
    date: '2018-2019',
    active: true
  },
  {
    route: '/greenbox',
    image: {
      src: 'greenbox/greenbox_app2.png',
      alt: 'Usability test of the greenbox app'
    },
    name: 'Greenbox',
    slogan: 'Turning people into urban gardeners',
    clients: ['Greenbox'],
    task: 'Usability evaluation',
    date: '2015',
    active: true
  },
  {
    route: '/phoenix',
    image: {
      src: 'phoenix/phoenix_mp.jpg',
      alt: 'Screenshot of phoenix application'
    },
    name: 'Phoenix',
    slogan: 'The musicplayer that knows what you want to hear',
    clients: ['Myself'],
    task: 'Design & Development',
    date: '2015-2017',
    active: false
  },
  {
    route: '/querybuilder',
    image: {
      src: 'querybuilder/querybuilder.png',
      alt: 'Graph representation of an SQL query'
    },
    name: 'Querybuilder',
    slogan: 'Finding the needle in the data haystack',
    clients: ['KNIME'],
    task: 'UI/UX Design',
    date: '2018',
    active: false
  },
  {
    route: '/codesnippets',
    image: {
      src: 'codesnippets/formulas04.jpg',
      alt: 'Screenshot of phoenix application'
    },
    name: 'Code snippets',
    slogan: 'Code snippets for faster data transformation',
    clients: ['KNIME'],
    task: 'UI/UX Design',
    date: '2017',
    active: false
  },
  {
    route: '/mechanics',
    image: {
      src: 'mechanics/mechanics.png',
      alt: 'Mechanic with helmet camera interacting with tablet'
    },
    name: 'Mechanics',
    slogan: 'Digitalizing the work of mechanics',
    clients: ['Condat'],
    task: 'Field test',
    date: '2015',
    active: false
  },
  {
    route: '/thesis',
    image: {
      src: 'thesis/adjustable-eyes.jpg',
      alt: 'Adjustable artificial eyes'
    },
    name: 'Thesis',
    slogan: 'How to make eye tracking more robust',
    clients: ['TU Berlin'],
    task: 'Master thesis',
    date: '2016-2017',
    active: false
  },
]

// only active routes (shown on landing page)
export const activeRoutes = projData.filter(e => e.active)

// projectRoutes (all project routes with landing page)
export const projectRoutes = projData.map(e => e.route).concat(['/'])
