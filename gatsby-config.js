/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Chris Gatsby Bootstrap",
    description: "Gatsby site wordpress test",
    keywords: "gatsby, wordpress, react",
    image: '/static/gatsby.jpg',
    url: 'https://www.shining3d.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    },    
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `www.shining3d.com`,
        protocol: `http`,
        hostingWPCOM: false
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
