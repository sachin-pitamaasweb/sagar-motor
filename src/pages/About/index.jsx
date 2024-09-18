import React from "react";

import Banner from "../../components/Banner";
import ProgressSection from "../../components/ProgressSection";
import Timeline from "../../components/Timeline";
import AboutUsSection from "../../components/AboutUsSection";
import TextSection from "../../components/TextSection";

import './style.css';

const About = () => {
    const mediaType = 'image';
    const mediaSource = 'https://res.cloudinary.com/dtivafy25/image/upload/v1726640957/img-1_trirbe.png';
    const altText = 'Sagar Motor Banner';
    const progressData1 = {
        title: 'From Roads to Progress Since 1999',
        content: 'Founded in 1999, Sagar Motors started as a humble highway repair center, driven by a passion for vehicles and a commitment to service. Today, we are a trusted name as authorized dealers for Ashok Leyland and Honda 2-Wheelers, and pioneers in solid waste management, delivering innovative solutions. Our journey reflects growth, innovation, and a strong commitment to sustainability.',
        imageUrl: 'https://via.placeholder.com/200',
    };
    return (
        <>
            <Banner
                mediaType={mediaType}
                mediaSource={mediaSource}
                altText={altText}
            />
            <ProgressSection
                title={progressData1.title}
                content={progressData1.content}
                imageUrl={progressData1.imageUrl}
                reverse={false}
                headingSize="h2"
            />
            <div className="about-time-container">
                <h2 className="main-title">Our Commitment to Excellence</h2>
                <Timeline />
            </div>
            <AboutUsSection />
            <TextSection />
        </>
    );
};

export default About;