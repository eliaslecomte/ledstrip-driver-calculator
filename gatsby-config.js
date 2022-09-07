module.exports = {
  siteMetadata: {
    title: `Ledstrip Driver Calculator`,
    description: `Calculate what driver your ledstrip needs`,
    authors: {
      elias: {
        username: `@eliaslecomte`,
        url: 'https://eliaslecomte.be',
      },
      thib: {
        username: '@thibmaek',
        url: 'https://thibmaek.com',
      }
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ledstrip Driver Calculator`,
        short_name: `Ledstrip Calculator`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // TODO: add icon for PWA
        icon: `src/images/ws2812b_led_strip.png`,
      },
    },
    // TODO: enable PWA
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
