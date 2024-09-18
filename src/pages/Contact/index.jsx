import React from 'react';

import Banner from '../../components/Banner';
import ContactInfo from '../../components/ContactInfo';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
    const mediaType = 'image';
    const mediaSource = 'https://res.cloudinary.com/dtivafy25/image/upload/v1726640957/img-1_trirbe.png';
    const altText = 'Sagar Motor Banner';
    return (
        <>
            <Banner
                mediaType={mediaType}
                mediaSource={mediaSource}
                altText={altText}
            />

            <ContactInfo />

            <ContactForm />
        </>
    );
};

export default Contact;