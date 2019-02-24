const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    template: './src/pages/home.hbs'
  },
  {
    output: './existing_buildings.html',
    content: {
      title: 'budynki istniejące',
      description: ''
    },
    template: './src/pages/existing_buildings.hbs'
  },
  {
    output: './new_buildings.html',
    content: {
      title: 'budynki nowe',
      description: ''
    },
    template: './src/pages/new_buildings.hbs'
  },
  {
    output: './contact.html',
    content: {
      title: 'kontakt',
      description: ''
    },
    template: './src/pages/contact.hbs'
  },
  {
    output: './interiors.html',
    content: {
      title: 'wnętrza i przestrzenie',
      description: ''
    },
    template: './src/pages/interiors.hbs'
  },
  {
    output: './price_list.html',
    content: {
      title: 'cennik',
      description: ''
    },
    template: './src/pages/price_list.hbs'
  }
]

module.exports = pages
