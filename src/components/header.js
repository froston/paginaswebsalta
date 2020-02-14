import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/logo.png'

const Header = ({ siteTitle }) => (
  <header id="pws-header" >
    <Link to="/">
      <img src={Logo} alt="Paginas Web Salta Logo" />
      <h1>
          {siteTitle} 
      </h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
