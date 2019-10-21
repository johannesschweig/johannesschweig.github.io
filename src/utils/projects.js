// data for the projects
export const projData = [
    {
        id: 1,
        route: '/knimehub',
        image: {src: 'knimehub/front_page.png', alt: 'Screenshot of the landing page of KNIME hub'},
        name: 'KNIME Hub',
        slogan: 'Collaborative platform for data scientists',
        client: 'KNIME',
        task: 'UI/UX Design',
        date: '2018-2019',
        active: true // active projects are shown on the landing page, inactive ones are only accessible by route
    },
    {
        id: 2,
        route: '/phoenix',
        image: {src: 'phoenix/phoenix_mp.png', alt: 'Screenshot of phoenix application'},
        name: 'Phoenix',
        slogan: 'The musicplayer that knows what you want to hear',
        client: 'Myself',
        task: 'Design & Development',
        date: '2015-2017',
        active: true
    },
    {
        id: 3,
        route: '/greenbox',
        image: {src: 'greenbox/greenbox_app2.png', alt: 'Usability test of the greenbox app'},
        name: 'Greenbox',
        slogan: 'Turning people into urban gardeners',
        client: 'Greenbox',
        task: 'Usability evaluation',
        date: '2015',
        active: true
    },
    {
        id: 4,
        route: '/querybuilder',
        image: {src: 'querybuilder/querybuilder.png', alt: 'Graph representation of an SQL query'},
        name: 'Querybuilder',
        slogan: 'Finding the needle in the data haystack',
        client: 'KNIME',
        task: 'UI/UX Design',
        date: '2018',
        active: false
    },
    {
        id: 5,
        route: '/codesnippets',
        image: {src: 'codesnippets/formulas04.jpg', alt: 'Screenshot of phoenix application'},
        name: 'Code snippets',
        slogan: 'Code snippets for faster data transformation',
        client: 'KNIME',
        task: 'UI/UX Design',
        date: '2017',
        active: false
    },
]

export const namedRoutes = projData.map(obj => ({ route: obj.route, name: obj.name })).concat([
  {
    route: '/',
    name: 'Portfolio'
  },
  {
    route: '/legal',
    name: 'Legal'
  }
])

// only active routes (shown on landing page)
export const activeRoutes = projData.filter(e => e.active)