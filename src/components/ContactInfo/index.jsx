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


// ContactInfo.js
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import "./style.css";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: <MapPin className="icon" />,
      title: "ADDRESS",
      content: "Sagar Motors, Nanded Road, Vivekanand Chowk, Latur 413512, Maharashtra, India",
    },
    {
      icon: <Mail className="icon" />,
      title: "EMAIL",
      content: "contact@sagarmotors.com",
      href: "mailto:contact@sagarmotors.com",
    },
    {
      icon: <Phone className="icon" />,
      title: "PHONE",
      content: "+91 904 901 1111",
      href: "tel:+919049011111",
    },
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <div key={info.title} className="contact-card">
              <div className="card-header">
                <div className="card-title">
                  {info.icon}
                  {info.title}
                </div>
              </div>
              <div className="card-content">
                {info.href ? (
                  <a href={info.href} className="card-link">
                    {info.content}
                  </a>
                ) : (
                  <span className="card-text">{info.content}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
