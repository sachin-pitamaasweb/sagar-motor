import React, { useEffect } from 'react';
import './style.css'; // Add any custom styles here

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Latur Solid Waste Management',
    budget: '₹117.35 Cr.',
    description: 'Innovative waste management solutions for Latur, focusing on sustainable practices and environmental conservation.',
    image: require('../../assets/projectcard/img-1.png') || 'https://via.placeholder.com/300',
  },
  {
    title: 'Telangana Bio-Mining',
    budget: '₹85 Cr.',
    description: 'Cutting-edge bio-mining techniques implemented in Telangana to extract valuable resources from waste materials.',
    image: require('../../assets/projectcard/img-2.png') || 'https://via.placeholder.com/300',
  },
  {
    title: 'Solapur Waste Management',
    budget: '₹24 Cr.',
    description: 'Comprehensive waste management program in Solapur, addressing urban waste challenges with modern solutions.',
    image: require('../../assets/projectcard/img-3.png') || 'https://via.placeholder.com/300',
  },
  {
    title: 'Ludhiana Bio-Mining',
    budget: '₹26.5 Cr.',
    description: 'Advanced bio-mining operations in Ludhiana, transforming waste sites and recovering valuable materials.',
    image: require('../../assets/projectcard/img-4.png') || 'https://via.placeholder.com/300',
  },
  {
    title: 'Nashik & Akola Bio-Mining',
    budget: '₹4.3 Cr. (Nadiyala), ₹2.5 Cr. (Adoni)',
    description: 'Joint bio-mining initiatives in Nashik and Akola, showcasing innovative approaches to waste management and resource recovery.',
    image: require('../../assets/projectcard/img-5.png') || 'https://via.placeholder.com/300',
  },
];

const ProjectCard = () => {
  useEffect(() => {
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

  const truncateDescription = (description) => {
    const words = description.split(' ');
    let line = '';
    const formattedDescription = words.reduce((acc, word) => {
      if (line.length + word.length + 1 <= 150) {
        line += `${word} `;
      } else {
        acc.push(line.trim());
        line = `${word} `;
      }
      return acc;
    }, []);
    if (line) formattedDescription.push(line.trim());
    return formattedDescription;
  };

  return (
    <div className="container-scroll" id="panelContainer">
      {projects.map((data, index) => (
        <section className="panel" key={index}>
          <div className="card">
            <img src={data.image} alt={data.title} />
            <div className="card-content">
              <h2>{data.title}</h2>
              {truncateDescription(data.description).map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectCard;
