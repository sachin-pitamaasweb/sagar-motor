// import { Instagram, Twitter, Facebook } from "@mui/icons-material"
// import { Link } from "react-router-dom"
// import './style.css'  // Import external CSS

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-grid">
//           <div className="footer-title">
//             SAGAR MOTORS
//           </div>
//           <div className="footer-icons">
//             <Link to="#">
//               <Instagram className="footer-icon" />
//             </Link>
//             <Link to="#">
//               <Twitter className="footer-icon" />
//             </Link>
//             <Link to="#">
//               <Facebook className="footer-icon" />
//             </Link>
//           </div>
//           <nav className="footer-links">
//             <Link to="/" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
//             <Link to="/about" onClick={() => window.scrollTo(0, 0)}>ABOUT US</Link>
//             <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>PROJECT</Link>
//             <Link to="/infrastructure" onClick={() => window.scrollTo(0, 0)}>INFRASTRUCTURE</Link>
//             <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>CONTACT US</Link>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer;



// Footer.js
"use client";

import { Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import "./style.css"; // Import the external CSS file

export default function Footer() {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo */}
          <div className="logo">SAGAR MOTORS</div>

          {/* Social Icons */}
          <div className="social-icons">
            <Link to="#" aria-label="Instagram" >
              <Instagram className="icon" style={{ color: "white" }}  />
            </Link>
            <Link to="#" aria-label="Twitter">
              <Twitter className="icon" style={{ color: "white" }} />
            </Link>
            <Link to="#" aria-label="Facebook">
              <Facebook className="icon" style={{ color: "white" }} />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              <li><Link to="/" onClick={scrollToTop}>HOME</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>ABOUT US</Link></li>
              <li><Link to="/projects" onClick={scrollToTop}>PROJECT</Link></li>
              <li><Link to="/infrastructure" onClick={scrollToTop}>INFRASTRUCTURE</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>CONTACT US</Link></li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <nav className="nav-mobile">
            <ul className="nav-list">
              <li><Link to="/" onClick={scrollToTop}>HOME</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>ABOUT US</Link></li>
              <li><Link to="/projects" onClick={scrollToTop}>PROJECT</Link></li>
              <li><Link to="/infrastructure" onClick={scrollToTop}>INFRASTRUCTURE</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>CONTACT US</Link></li>
            </ul>
          </nav>
        </div>

        {/* Copyright and Credits */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sagar Motors. All rights reserved.</p>
          <p>Developed by <a href="https://www.pitamaas.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Pitamaas</a></p>
        </div>
      </div>
    </footer>
  );
}
