import React from 'react';

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// components
import Banner from '../../components/Banner';
import ProfileSection from '../../components/ProfileSection';
import Card from '../../components/Card';
import ProjectShowcase from '../../components/ProjectShowcase';
import SafetyGrid from '../../components/SafetyGrid';

// style
import './style.css';
import ReachUs from '../../components/ReachUs';

const Home = () => {
    const mediaType = 'video';
    const mediaSource = 'https://res.cloudinary.com/dtivafy25/video/upload/v1725711523/Video_1_ahdqvj.mp4';
    const altText = 'Sagar Motor Banner';


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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Default: Show 3 cards on larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024, // Tablet view
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768, // Mobile view
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };


    return (
        <>
            <Banner
                mediaType={mediaType}
                mediaSource={mediaSource}
                altText={altText}
            />
            <ProfileSection />
            <ProjectShowcase />
            <SafetyGrid />
            <div className="card-container">
                <h2 className="main-title">Our Commitment to Excellence</h2>
                <Slider {...settings} >
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </Slider>
            </div>
            <h1 className="main-title" style={{ textAlign: 'center', margin: '0px' }}>
                Your Trusted Partner, Always Within Reach
            </h1>
            <ReachUs />
        </>
    );
};

export default Home;