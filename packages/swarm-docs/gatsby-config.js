module.exports = {
  siteMetadata: {
    title: 'Swarm Docs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-flow',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayout: require.resolve('./src/components/layout-mdx.js'),
        extensions: ['.md', '.mdx'],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
