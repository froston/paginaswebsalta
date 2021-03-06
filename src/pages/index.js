import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Paginas Web Salta" />
    <h1>!Bienvenido a Páginas Web Salta¡</h1>
    <p>
      Si buscas una presentación web que brinde a tu empresa una imágen
      profesional y creíble o si necesitas captar más y nuevos clientes en el
      mercado te podemos ayudar - Páginas Web Salta puede brindarte la solución.
    </p>
    <p>
      A través del desarrollo de una página web moderna lograrás que tu empresa
      sea reconocida y tenga mayor presencia en el mercado. Nuestros clientes ya
      lo experimentaron, contactanos y te daremos una solución a la medida de tu
      empresa.
    </p>
    <div style={{textAlign: 'right', position: 'fixed', zIndex:9999999, bottom: 0, width: 'auto', right: '1%', cursor: 'pointer', lineHeight: 0, display:'block !important'}}>
      <a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." target="_blank">
        <img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png" alt="www.000webhost.com" />
      </a>
    </div>
  </Layout>
)

export default IndexPage
