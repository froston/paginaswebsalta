import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => (
  <footer style={{ marginTop: 34 }}>
    <p style={{ marginBottom: 6, fontSize: 12 }}>
      Contactanos por whatsapp <br />o redes sociales:
    </p>
    <ul className="social-links">
      <li>
        <a className="whatsapp" href="https://api.whatsapp.com/send?phone=+543874438056" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} />
        </a>
      </li>
      <li>
        <a className="facebook" href="https://www.facebook.com/Paginas-Web-Salta-114603460090519" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
      </li>
      <li>
        <a className="github" href="https://github.com/froston" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
