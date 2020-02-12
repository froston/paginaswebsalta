/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

library.add(fab, faCheckSquare, faCoffee)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <section id="content">
        <article>{children}</article>
      </section>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
