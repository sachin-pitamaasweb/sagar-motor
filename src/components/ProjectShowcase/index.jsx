// import React from 'react';
// import './style.css';

// const projects = [
//   {
//     title: 'Latur Solid Waste Management',
//     description:
//       'Ongoing project managing solid waste collection and bio-mining across Latur, with a total project value of ₹1117.35 Cr. This initiative ensures efficient waste processing and environmental sustainability.',
//     status: 'ON-GOING PROJECT',
//     image: require('../../assets/Projects/img-1.png') ||'https://via.placeholder.com/150x100',
//   },
//   {
//     title: 'Telangana Bio-Mining',
//     description:
//       'Leading bio-mining efforts in 28 ULB clusters across Telangana, with a total project value of ₹85 Cr. We employ cutting-edge technology to process legacy waste and promote sustainability.',
//     status: 'LOI Received',
//     image: require('../../assets/Projects/img-2.png') ||'https://via.placeholder.com/150x100',
//   },
//   {
//     title: 'Solapur Waste Management',
//     description:
//       'Implementing comprehensive bio-mining and waste management strategies in Solapur, contributing to a cleaner and greener city with a total project value of ₹24 Cr.',
//     status: 'ON-GOING PROJECT',
//     image: require('../../assets/Projects/img-3.png') ||'https://via.placeholder.com/150x100',
//   },
//   {
//     title: 'Ludhiana Bio-Mining',
//     description:
//       'Ongoing bio-mining project in Ludhiana, focused on legacy waste processing with a total project value of ₹26.5 Cr. This project transforms waste into valuable resources, driving environmental change.',
//     status: 'ON-GOING PROJECT',
//     image: require('../../assets/Projects/img-4.png') ||'https://via.placeholder.com/150x100',
//   },
//   {
//     title: 'Nadiyala & Adoni Bio-Mining',
//     description:
//       'Active bio-mining projects in Nadiyala and Adoni, driving environmental change through sustainable waste management solutions with total project values of ₹14.3 Cr and ₹12.5 Cr respectively.',
//     status: 'ON-GOING PROJECT',
//     image: require('../../assets/Projects/img-5.png') ||'https://via.placeholder.com/150x100',
//   },
// ];

// const ProjectShowcase = () => {
//   return (
//     <div className="project-showcase-container">
//       <div className="title-container">
//         <h1>Projects That Power Our Vision</h1>
//       </div>
//       <div className="projects-list">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <img src={project.image} alt={project.title} className="project-image" />
//             <div className="project-details">
//               <h2>{project.title}</h2>
//               <p>{project.description}</p>
//             </div>
//             <div className="project-status">
//               <p>{project.status}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectShowcase;

import React from 'react';
import './style.css';

const projects = [
  {
    title: "Latur Solid Waste Management",
    description: "Ongoing project managing solid waste collection and bio-mining across Latur, with a total project value of ₹117.35 Cr. This initiative ensures efficient waste processing and environmental sustainability.",
    status: "ON-GOING PROJECT",
    statusClass: "status-ongoing",
    image: require("../../assets/Projects/img-1.png") || "https://via.placeholder.com/220x150"
  },
  {
    title: "Telangana Bio-Mining",
    description: "Leading bio-mining efforts in 28 ULB clusters across Telangana, with a total project value of ₹85 Cr. We employ cutting-edge technology to process legacy waste and promote sustainability.",
    status: "LOI RECEIVED",
    statusClass: "status-received",
    image: require("../../assets/Projects/img-2.png") || "https://via.placeholder.com/220x150"
  },
  {
    title: "Solapur Waste Management",
    description: "Implementing comprehensive bio-mining and waste management strategies in Solapur, contributing to a cleaner and greener city with a total project value of ₹24 Cr.",
    status: "ON-GOING PROJECT",
    statusClass: "status-ongoing",
    image: require("../../assets/Projects/img-3.png") || "https://via.placeholder.com/220x150"
  }
];

const ProjectShowcase = () => {
  return (
    <div className="project-showcase">
      <div className="project-showcase-container">
        <div className="title-container">
          <h1>Projects That Power Our Vision</h1>
        </div>
        {projects.map((project, index) => (
          <div className="project-card" style={{ animationDelay: `${0.4 + index * 0.2}s` }} key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <div className={`project-status ${project.statusClass}`}>{project.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
