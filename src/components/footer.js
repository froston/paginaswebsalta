import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => (
  <footer>
    <ul className="social-links">
      <li>
        <a href="https://www.facebook.com/Paginas-Web-Salta-114603460090519">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/muller_pav">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
      </li>
      <li>
        <a href="https://github.com/froston">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
