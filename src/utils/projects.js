// data for the projects
export const projData = [
  {
    route: '/businesshub',
    image: {
      src: 'businesshub/dashboard-mockup.jpg',
      alt: 'Design for a business hub',
    },
    name: 'Business hub',
    slogan: 'Business hub for the middle east',
    clients: ['Nelta'],
    task: 'UX/UI Design',
    industry: 'Government',
    date: 'March 2025',
    active: true
  },
  {
    route: '/dubai',
    image: {
      src: 'dubai/venice-showcase.png',
      alt: 'Website for a real estate project'
    },
    name: 'Dubai',
    slogan: 'Real estate website for Dubai',
    clients: ['Gravitas Property Ventures'],
    task: 'UI Design',
    industry: 'Real Estate',
    date: 'Jan 2024',
    active: true
  },
  {
    route: '/trafficticket',
    image: {
      src: 'trafficticket/ticket1.jpeg',
      alt: 'A parking ticket on a windshield'
    },
    name: 'Traffic ticket',
    slogan: 'Processing traffic tickets for a car rental',
    clients: ['MaibornWolff', 'Car rental company'],
    task: 'Product Management',
    industry: 'Mobility',
    date: 'Feb 2022-Jan 2023',
    active: true
  },
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
    industry: 'NGO',
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
    industry: 'Finance',
    date: 'Jan-Mar 2020',
    active: false // active projects are shown on the landing page, inactive ones are only accessible by route
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
    industry: 'Data Science',
    date: '2018-2019',
    active: false,
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
    industry: 'B2C App',
    date: '2015',
    active: false
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
    industry: 'Entertainment',
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
    industry: 'Data Science',
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
    industry: 'Data Science',
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
    industry: 'Manufacturing',
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
    industry: 'Academia',
    date: '2016-2017',
    active: false
  },
]

// only active routes (shown on landing page)
export const activeRoutes = projData.filter(e => e.active)

// projectRoutes (all project routes with landing page)
export const projectRoutes = projData.map(e => e.route).concat(['/'])
