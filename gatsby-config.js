module.exports = {
  siteMetadata: {
    title: `Wheels Forgotten`,
    description: `Focusing on the un-loved, weird, or just plain old-fashioned. If it has wheels and an engine we're probably interested. Detailing, Reconditioning, Restorations, Revivals/First Starts and Drives, Paint Correction, Welding and Minor Fabrication, General Mechanics, Rust Repair, Body Work, Engine Swaps, Parts Sales, Car and Motorcycle Sales in Maryland`,
    author: `robSturcke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: `40283398828`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/WF.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
