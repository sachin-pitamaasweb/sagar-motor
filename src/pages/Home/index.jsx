import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import Banner from '../../components/Banner';
import ProfileSection from '../../components/ProfileSection';
import Card from '../../components/Card';
import ProjectShowcase from '../../components/ProjectShowcase';
import SafetyGrid from '../../components/SafetyGrid';
import ProjectCardScroll from '../../components/ProjectCardScroll';
import ReachUs from '../../components/ReachUs';

// style
import './style.css';

// Custom hook to detect screen size
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};

const Home = () => {
    const mediaType = 'video';
    const mediaSource = 'https://res.cloudinary.com/dtivafy25/video/upload/v1725711523/Video_1_ahdqvj.mp4';
    const altText = 'Sagar Motor Banner';
    const title = "Driving Innovation, Creating the FUTURE";
    const description = "We build vehicles that drive communities forward, sustainably.";
    const buttonText = "Explore Now"

    // Card data
    const data = [
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

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    // Detect device size
    const isTabletOrMobile = useMediaQuery('(max-width: 1024px)');
    const isDesktop = useMediaQuery('(min-width: 1025px)');

    return (
        <>
            <Helmet>
                <title>Sagar Motors - Leading Automotive & Environmental Company</title>
                <meta name="description" content="Sagar Motors is an authorized dealer of Ashok Leyland and Honda 2-Wheelers, specializing in waste management and community development." />
                <meta name="keywords" content="Sagar Motors, automotive, environmental, Ashok Leyland, Honda 2-Wheelers, waste management" />
                <meta name="author" content="Sagar Motors" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            </Helmet>
            <Banner
                mediaType={mediaType}
                mediaSource={mediaSource}
                altText={altText}
                title={title}
                description={description}
                buttonText={buttonText}
            />
            <ProfileSection />
            <ProjectShowcase />
            <SafetyGrid />
            <div className="card-container">
                <h2 className="main-title">Our Commitment to Excellence</h2>
                {/* Conditional rendering based on screen size */}
                {isTabletOrMobile && (
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </Slider>
                )}
                {isDesktop && <ProjectCardScroll />}
            </div>
            <h1 className="main-title" style={{ textAlign: 'center', margin: '0px' }}>
                Your Trusted Partner, Always Within Reach
            </h1>
            <ReachUs />
        </>
    );
};

export default Home;
