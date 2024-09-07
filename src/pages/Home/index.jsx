import React from 'react';

// components
import Banner from '../../components/Banner';

const Home = () => {
    const mediaType = 'video';
    const mediaSource = 'https://res.cloudinary.com/dtivafy25/video/upload/v1725711523/Video_1_ahdqvj.mp4';
    const altText = 'Sagar Motor Banner';
    return (
        <>
            <Banner
                mediaType={mediaType}
                mediaSource={mediaSource}
                altText={altText}
            />
        </>
    );
};

export default Home;