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
  },
]

// projectRoutes (all project routes with landing page)
export const projectRoutes = projData.map(e => e.route).concat(['/'])
