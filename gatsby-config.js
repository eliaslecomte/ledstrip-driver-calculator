module.exports = {
  siteMetadata: {
    title: `LED strip driver calculator`,
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
        name: `LED strip driver calculator`,
        short_name: `Ledstrip calculator`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ws2812b_led_strip.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
