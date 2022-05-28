module.exports = {
  siteMetadata: {
    title: `Frontend Masters Gatsby Workshop Intro`,
    description:
      'A site we built together doing a full-day Frontend MAsters Gatsby workshop!',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
}
