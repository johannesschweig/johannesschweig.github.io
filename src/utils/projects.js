// data for the projects
export const projData = [
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
    date: 'Feb-Sept 2025',
  },
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
