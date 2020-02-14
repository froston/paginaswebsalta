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
    author: `Paginas Web Salta`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paginas Web Salta`,
        short_name: `Paginas Web Salta`,
        start_url: `/`,
        background_color: `#8DC6FF`,
        theme_color: `#8DC6FF`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
