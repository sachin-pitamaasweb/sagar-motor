import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../../components/Banner';
import ContactInfo from '../../components/ContactInfo';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
    const mediaType = 'image';
    const mediaSource = require('../../assets/banner/img-3.png') || 'https://via.placeholder.com/200';
    const altText = 'Sagar Motor Banner';
    return (
        <>
         <Helmet>
                <title>Contact Us - Sagar Motors</title>
                <meta name="description" content="Get in touch with Sagar Motors for inquiries, support, and information about our services." />
                <meta name="keywords" content="Sagar Motors, Contact, customer support, inquiries" />
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

            <ContactInfo />

            <ContactForm />
        </>
    );
};

export default Contact;