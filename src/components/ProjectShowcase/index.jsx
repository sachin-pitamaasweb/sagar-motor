// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './style.css';

// const projects = [
//   {
//     title: "Latur Solid Waste Management",
//     description: "Ongoing project managing solid waste collection and bio-mining across Latur, with a total project value of ₹117.35 Cr. This initiative ensures efficient waste processing and environmental sustainability.",
//     status: "ON-GOING PROJECT",
//     statusClass: "status-ongoing",
//     image: require("../../assets/Projects/img-1.jpg") || "https://via.placeholder.com/220x150"
//   },
//   {
//     title: "Telangana Bio-Mining",
//     description: "Leading bio-mining efforts in 28 ULB clusters across Telangana, with a total project value of ₹85 Cr. We employ cutting-edge technology to process legacy waste and promote sustainability.",
//     status: "LOI RECEIVED",
//     statusClass: "status-received",
//     image: require("../../assets/Projects/img-2.jpg") || "https://via.placeholder.com/220x150"
//   },
//   {
//     title: "Solapur Waste Management",
//     description: "Implementing comprehensive bio-mining and waste management strategies in Solapur, contributing to a cleaner and greener city with a total project value of ₹24 Cr.",
//     status: "ON-GOING PROJECT",
//     statusClass: "status-ongoing",
//     image: require("../../assets/Projects/img-3.jpg") || "https://via.placeholder.com/220x150"
//   },
//   {
//     title: "Ludhiana Bio-Mining",
//     description: "Ongoing bio-mining project in Ludhiana, focused on legacy waste processing with a total project value of ₹26.5 Cr. This project transforms waste into valuable resources, driving environmental change.",
//     status: "ON-GOING PROJECT",
//     statusClass: "status-ongoing",
//     image: require("../../assets/Projects/img-4.jpg") || "https://via.placeholder.com/220x150"
//   },
//   {
//     title: "Nadiyala & Adoni Bio-Mining",
//     description: "Active bio-mining projects in Nadiyala and Adoni, driving environmental change through sustainable waste management solutions with total project values of ₹4.3 Cr. and ₹2.5 Cr. respectively.",
//     status: "ON-GOING PROJECT",
//     statusClass: "status-ongoing",
//     image: require("../../assets/Projects/img-5.jpg") || "https://via.placeholder.com/220x150"
//   }
// ];

// const ProjectShowcase = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   // Update scroll position on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="project-showcase">
//       <div className="project-showcase-container">
//         <div className="title-container">
//           <h1>Projects That Power Our Vision</h1>
//         </div>
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="project-card"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: scrollPosition > 100 ? 1 : 0, y: scrollPosition > 100 ? 0 : 50 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.2, // Add delay to each card
//             }}
//             style={{ animationDelay: `${0.4 + index * 0.2}s` }}
//           >
//             <div className="project-image-container">
//               <img src={project.image} alt={project.title} className="project-image" />
//             </div>
//             <div className="project-details">
//               <h2 className="project-title">{project.title}</h2>
//               <p className="project-description">{project.description}</p>
//             </div>
//             <div className={`project-status ${project.statusClass}`}>{project.status}</div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectShowcase;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const projects = [
  {
    title: "Latur Solid Waste Management",
    description: (
      <>
        Ongoing project managing <span className="highlight">solid waste collection</span> and <span className="highlight">bio-mining</span> across Latur, with a total project value of <span className="highlight">₹117.35 Cr.</span> This initiative ensures efficient waste processing and environmental sustainability.
      </>
    ),
    status: "ON-GOING PROJECT",
    statusClass: "status-ongoing",
    image: require("../../assets/Projects/img-1.jpg") || "https://via.placeholder.com/220x150"
  },
  {
    title: "Telangana Bio-Mining",
    description: (
      <>
        Leading bio-mining efforts in <span className="highlight">28 ULB clusters</span> across Telangana, with a total project value of <span className="highlight">₹85 Cr.</span> We employ cutting-edge technology to process legacy waste and promote sustainability.
      </>
    ),
    status: "LOI RECEIVED",
    statusClass: "status-received",
    image: require("../../assets/Projects/img-2.jpg") || "https://via.placeholder.com/220x150"
  },
  {
    title: "Solapur Waste Management",
    description: (
      <>
        Implementing comprehensive <span className="highlight">bio-mining</span> and <span className="highlight">waste management</span> strategies in Solapur, contributing to a cleaner and greener city with a total project value of <span className="highlight">₹24 Cr.</span>
      </>
    ),
    status: "ON-GOING PROJECT",
    statusClass: "status-ongoing",
    image: require("../../assets/Projects/img-3.jpg") || "https://via.placeholder.com/220x150"
  },
  {
    title: "Ludhiana Bio-Mining",
    description: (
      <>
        Ongoing <span className="highlight">bio-mining</span> project in Ludhiana, focused on <span className="highlight">legacy waste processing</span> with a total project value of <span className="highlight">₹26.5 Cr.</span> This project transforms waste into valuable resources, driving environmental change.
      </>
    ),
    status: "ON-GOING PROJECT",
    statusClass: "status-ongoing",
    image: require("../../assets/Projects/img-4.jpg") || "https://via.placeholder.com/220x150"
  },
  {
    title: "Nadiyala & Adoni Bio-Mining",
    description: (
      <>
        Active <span className="highlight">bio-mining</span> projects in Nadiyala and Adoni, driving environmental change through sustainable waste management solutions with total project values of <span className="highlight">₹4.3 Cr.</span> and <span className="highlight">₹2.5 Cr.</span> respectively.
      </>
    ),
    status: "ON-GOING PROJECT",
    statusClass: "status-ongoing",
    image: require("../../assets/Projects/img-5.jpg") || "https://via.placeholder.com/220x150"
  }
];

const ProjectShowcase = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="project-showcase">
      <div className="project-showcase-container">
        <div className="title-container">
          <h1>Projects That Power Our Vision</h1>
        </div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollPosition > 100 ? 1 : 0, y: scrollPosition > 100 ? 0 : 50 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // Add delay to each card
            }}
            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <div className={`project-status ${project.statusClass}`}>{project.status}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
