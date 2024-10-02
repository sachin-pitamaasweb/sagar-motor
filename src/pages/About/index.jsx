import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../../components/Banner";
import ProgressSection from "../../components/ProgressSection";
import Timeline from "../../components/Timeline";
import AboutUsSection from "../../components/AboutUsSection";
import TextSection from "../../components/TextSection";

import './style.css';

const About = () => {
    const mediaType = 'image';
    const mediaSource = require('../../assets/banner/img-1.png') || 'https://via.placeholder.com/200';
    const altText = 'Sagar Motor Banner';
    const progressData1 = {
        title: 'From Roads to Progress Since 1999',
        content: 'Founded in 1999, Sagar Motors started as a humble highway repair center, driven by a passion for vehicles and a commitment to service. Today, we are a trusted name as authorized dealers for Ashok Leyland and Honda 2-Wheelers, and pioneers in solid waste management, delivering innovative solutions. Our journey reflects growth, innovation, and a strong commitment to sustainability.',
        imageUrl: require('../../assets/aboutus/pic.jpg') || 'https://via.placeholder.com/200',
    };
    return (
        <>
            <Helmet>
                <title>About Us - Sagar Motors</title>
                <meta name="description" content="Learn about Sagar Motors, authorized dealers for Ashok Leyland and Honda 2-Wheelers, and pioneers in solid waste management since 1999." />
                <meta name="keywords" content="Sagar Motors, About Us, Ashok Leyland, Honda 2-Wheelers, waste management, history" />
                <meta name="author" content="Sagar Motors" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />

            </Helmet>
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