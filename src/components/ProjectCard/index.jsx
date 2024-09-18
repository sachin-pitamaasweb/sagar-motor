import React from 'react';
import './style.css'; // Import the CSS file

const ProjectCard = () => {
    const cardsData = [
        {
            title: 'Latur Solid Waste Management',
            projectBudget: 'Project Value: ₹117.35 Cr.',
            content: 'Managing comprehensive solid waste collection and bio-mining in Latur, contributing to cleaner urban environments and sustainable waste disposal practices.',
            imageUrl: require('../../assets/projectcard/img-1.png') || 'https://assets.codepen.io/210284/flower-9.jpg'
        },
        {
            title: 'Telangana Bio-Mining',
            projectBudget: 'Project Value: ₹85 Cr.',
            content: 'Leading bio-mining efforts across 28 ULB clusters, handling legacy waste and creating sustainable solutions for the Telangana region.',
            imageUrl: require('../../assets/projectcard/img-2.png') || 'https://assets.codepen.io/210284/flower-8.jpg'
        },
        {
            title: 'Solapur Waste Management',
            projectBudget: 'Project Value: ₹24 Cr.',
            content: 'Implementing advanced bio-mining technologies to process and manage waste, significantly contributing to environmental health in Solapur.',
            imageUrl: require('../../assets/projectcard/img-3.png') || 'https://assets.codepen.io/210284/flower-7.jpg'
        },
        {
            title: 'Ludhiana Bio-Mining',
            projectBudget: 'Project Value: ₹26.5 Cr.',
            content: 'Ongoing project focused on legacy waste processing in Ludhiana, turning waste into usable resources and enhancing the city’s environmental footprint.',
            imageUrl: require('../../assets/projectcard/img-4.png') || 'https://assets.codepen.io/210284/flower-6.jpg'
        },
        {
            title: 'Nadiyala & Adoni Bio-Mining',
            projectBudget: 'Project Value: ₹4.3 Cr. (Nadiyala), ₹2.5 Cr. (Adoni)',
            content: 'Active bio-mining projects aimed at transforming waste into valuable resources, driving sustainability in Andhra Pradesh.',
            imageUrl: require('../../assets/projectcard/img-5.png') || 'https://assets.codepen.io/210284/flower-6.jpg'
        }
    ];
    return (
        <div>
            <main>
                <ul id="cards">
                    {cardsData.map((card, index) => (
                        <li className="card" key={index} id={`card-${index + 1}`}>
                            <div className="card-content">
                                <div>
                                    <h2 className="card-title">{card.title}</h2>
                                    <h6 className="card-title">{card.projectBudget}</h6>
                                    <p className="card-text">{card.content}</p>
                                </div>
                                <figure>
                                    <img src={card.imageUrl} alt={card.title} />
                                </figure>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default ProjectCard;
