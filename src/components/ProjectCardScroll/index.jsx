import React, { useEffect } from 'react';
import './style.css'; // Add any custom styles here

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
console.log("GSAP version:", gsap.version); // Check if GSAP is correctly imported
console.log("ScrollTrigger is registered:", ScrollTrigger);
const projects = [
  {
    title: 'Automotive Dealership',
    description:
        'Authorized dealers of Ashok Leyland and Honda 2-Wheelers, providing reliable and high-performance vehicles across multiple districts.',
    image: require('../../assets/card/img-1.png') || 'https://picsum.photos/350/200'
},
{
    title: 'Solid Waste Management',
    description:
        'Pioneering bio-mining and waste processing solutions, managing 11,000 metric tons of legacy waste daily, ensuring a cleaner environment.',
    image: require('../../assets/card/img-2.png') || 'https://picsum.photos/350/201',
},
{
    title: 'Bio-Mining & Composting',
    description:
        'Expertise in sustainable waste management, converting waste into valuable resources through advanced bio-mining and composting techniques.',
    image: require('../../assets/card/img-3.png') || 'https://picsum.photos/350/202',
},
{
    title: 'Customer Support',
    description:
        'Dedicated to exceptional customer service with a single-window contact system, ensuring timely and effective resolution of all customer needs.',
    image: require('../../assets/card/img-4.png') || 'https://picsum.photos/350/203',
},
];

const ProjectCard = () => {
  useEffect(() => {
    console.log("ScrollTrigger is working..."); // Check if useEffect runs correctly
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",

      scrollTrigger: {
        trigger: ".container-scroll",
        pin: true,
        scrub: 0.1,
        end: "+=3000",
        markers: false, 
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <div className="container-scroll" id="panelContainer">
      {projects.map((data, index) => (
        <section className="panel" key={index}>
          <div className="card">
            <img src={data.image} alt={data.title} />
            <div className="card-content">
              <h2>{data.title}</h2>
              <h5>{data.budget}</h5>
              <p>{data.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectCard;