import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../../components/Banner';
import ContactInfo from '../../components/ContactInfo';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
    const mediaType = 'image';
    const mediaSource = 'https://res.cloudinary.com/dtivafy25/image/upload/v1726640957/img-1_trirbe.png';
    const altText = 'Sagar Motor Banner';
    return (
        <>
         <Helmet>
                <title>Contact Us - Sagar Motors</title>
                <meta name="description" content="Get in touch with Sagar Motors for inquiries, support, and information about our services." />
                <meta name="keywords" content="Sagar Motors, Contact, customer support, inquiries" />
                <meta name="author" content="Sagar Motors" />
            </Helmet>
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