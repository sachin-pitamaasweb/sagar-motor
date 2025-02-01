// import React from 'react';
// import './style.css'; // Import the external CSS

// const ContactInfo = () => {
//     return (
//         <div className="contact-info-container">
//             {/* <div className="contact-info-section">
//                 <p className="contact-label">PHONE NO.</p>
//                 <p className="contact-value">+1 (555) 123-4567</p>
//             </div> */}

//             <div className="contact-info-section">
//                 <p className="contact-label">ADDRESS</p>
//                 <p className="contact-value">
//                     Sagar Motors, Nanded Road,
//                     <br />
//                     Vivekanand Chowk, Latur 413512,
//                     <br />
//                     Maharashtra, India
//                 </p>
//             </div>

//             <div className="contact-info-section">
//                 <p className="contact-label">EMAIL</p>
//                 <p className="contact-value">contact@sagarmotors.com</p>
//             </div>
//         </div>
//     );
// };

// export default ContactInfo;


import { MapPin, Mail } from "react-feather"
import "./ContactInfo.css"

function ContactInfo() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="card-icon">
              <MapPin className="icon" />
            </div>
            <h3>Visit Us</h3>
            <div className="card-content-address">
              <p className="business-name-address">Sagar Motors</p>
              <p>Nanded Road, Vivekanand Chowk</p>
              <p>Latur 413512</p>
              <p>Maharashtra, India</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon">
              <Mail className="icon" />
            </div>
            <h3>Email Us</h3>
            <div className="card-content-address">
              <a href="mailto:contact@sagarmotors.com" className="email-link">
                contact@sagarmotors.com
              </a>
              <p className="response-time">We respond within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4673.5602374772925!2d77.35030327604093!3d19.095930782112738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29ada7ba2cd3%3A0x99f23b864f876315!2sSagar%20Motors%2C%20Ashok%20Leyland%20%2C%20Nanded!5e1!3m2!1sen!2sin!4v1738410493378!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

