module.exports = {
  siteMetadata: {
    title: `Páginas Web Salta`,
    description: `
      !Bienvenido a Páginas Web Salta¡ 
      Si buscas una presentación web que brinde a tu empresa una imagen profesional y creíble 
      o si necesitas captar más y nuevos clientes en el mercado te podemos ayudar, 
      Páginas Web Salta puede brindarte la solución. 
      A través del desarrollo de una página web moderna lograrás que tu empresa sea reconocida
      y tenga mayor presencia en el mercado. Nuestros clientes ya lo experimentaron, 
      contactanos y te daremos una solución a la medida de tu empresa.
    `,
    author: `Pavel Muller`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
