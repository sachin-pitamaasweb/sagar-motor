import React, { useState } from 'react';
import { Grid, Box, Snackbar, Alert } from '@mui/material'; // Import MUI components
import emailjs from 'emailjs-com'; // Import EmailJS
import { useFormik } from 'formik'; // Import Formik
import * as Yup from 'yup'; // Import Yup for validation
import './style.css'; // Import the external CSS

const ContactForm = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility
    const [alertType, setAlertType] = useState('success'); // State for alert type (success or error)
    const [alertMessage, setAlertMessage] = useState(''); // State for alert message
    const [loading, setLoading] = useState(false); // State for loading indicator

    // Handle closing the Snackbar
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    // Define Formik with initial values, validation schema, and submit handler
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
                .required('Phone number is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            setLoading(true); // Start loading
            emailjs
                .send('service_olt55jw', 'template_hej630e', values, '-UHsRjXwjE-g3LU8i')
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        // Show success Snackbar
                        setAlertType('success');
                        setAlertMessage('Message sent successfully!');
                        setOpenSnackbar(true);
                        setLoading(false); // Stop loading
                        resetForm(); // Reset the form after submission
                    },
                    (err) => {
                        console.log('FAILED...', err);
                        // Show error Snackbar
                        setAlertType('error');
                        setAlertMessage('Failed to send the message. Please try again.');
                        setOpenSnackbar(true);
                        setLoading(false); // Stop loading
                    }
                );
        },
        validateOnBlur: true, // Show errors on blur
        validateOnChange: false, // Do not show errors on every keystroke
        validate: (values) => {
            // Custom validation function to trigger Snackbar for errors
            const errors = {};
            if (!values.firstName) {
                errors.firstName = 'First Name is required';
            }
            if (!values.lastName) {
                errors.lastName = 'Last Name is required';
            }
            if (!values.phone) {
                errors.phone = 'Phone number is required';
            } else if (!/^[0-9]{10}$/.test(values.phone)) {
                errors.phone = 'Phone number must be 10 digits';
            }
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.message) {
                errors.message = 'Message is required';
            }
            if (Object.keys(errors).length > 0) {
                setAlertType('error');
                setAlertMessage(Object.values(errors)[0]); // Display the first error
                setOpenSnackbar(true);
            }
            return errors;
        },
    });

    return (
        <section className="contact-form-section">
            <Box className="contact-form-container">
                <h2 className="contact-form-heading">
                    Your Trusted Partner, Always Within Reach
                </h2>

                <Grid container spacing={3} alignItems="center">
                    {/* Form Section: 8 columns */}
                    <Grid item xs={12} sm={8}>
                        <form className="contact-form" onSubmit={formik.handleSubmit}>
                            <div className="contact-form-row">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="contact-input"
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="contact-input"
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                />
                            </div>

                            <input
                                type="tel"
                                placeholder="Phone No."
                                className="contact-input full-width"
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="contact-input full-width"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />

                            <textarea
                                placeholder="Message"
                                className="contact-textarea"
                                name="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            ></textarea>

                            <button
                                type="submit"
                                className="contact-submit-button"
                                disabled={formik.isSubmitting || loading}
                            >
                                {loading ? 'Sending...' : 'SEND'}
                            </button>
                        </form>
                    </Grid>

                    {/* Image Section: 4 columns */}
                    <Grid item xs={12} sm={4}>
                        <Box className="contact-image">
                            <img
                                src={
                                    'https://res.cloudinary.com/dtivafy25/image/upload/v1726654760/1321231131_glgvqm.gif' ||
                                    'https://via.placeholder.com/300x300.png?text=Paper+Plane'
                                }
                                alt="Paper Plane"
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Snackbar with Alert */}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={4000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={alertType} sx={{ width: '100%' }}>
                        {alertMessage}
                    </Alert>
                </Snackbar>
            </Box>
        </section>
    );
};

export default ContactForm;
