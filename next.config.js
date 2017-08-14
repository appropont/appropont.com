const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  exportPathMap: () => ({
    '/blog': { page: '/blog' },
    '/projects': { page: '/projects' },
  })
})
