import { Instagram, Twitter, Facebook } from "@mui/icons-material"
import { Link } from "react-router-dom"
import './style.css'  // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-title">
            SAGAR MOTORS
          </div>
          <div className="footer-icons">
            <Link to="#">
              <Instagram className="footer-icon" />
            </Link>
            <Link to="#">
              <Twitter className="footer-icon" />
            </Link>
            <Link to="#">
              <Facebook className="footer-icon" />
            </Link>
          </div>
          <nav className="footer-links">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>ABOUT US</Link>
            <Link to="/project" onClick={() => window.scrollTo(0, 0)}>PROJECT</Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>CONTACT US</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
