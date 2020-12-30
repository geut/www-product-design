const { withNextein } = require('nextein/config')

module.exports = withNextein({
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown',
        options: {
          rehype: [
            'rehype-slug',
            'rehype-autolink-headings',
            '@mapbox/rehype-prism',
            'rehype-minify-whitespace'
          ]
        }
      }
    ]
  }
})
