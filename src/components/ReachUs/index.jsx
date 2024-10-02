import React, { useState } from 'react';
import { Snackbar, Alert, CircularProgress, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './style.css';

const ReachUs = () => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true); // Show loader

        // Simulate form submission delay
        setTimeout(() => {
            setLoading(false);
            if (Object.keys(errors).length > 0) {
                setMessage('Please correct the errors in the form.');
                setSeverity('error');
            } else {
                setMessage('Form submitted successfully!');
                setSeverity('success');
            }
            setOpen(true);
        }, 2000);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="ReachUs">
            <div className="ReachUs-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="FIRST NAME"
                            className='input-box'
                            required
                            {...register('firstName', { required: 'First name is required' })}
                        />
                        <input
                            type="text"
                            placeholder="LAST NAME"
                            className='input-box'
                            required
                            {...register('lastName', { required: 'Last name is required' })}
                        />
                    </div>
                    <input
                        type="tel"
                        placeholder="PHONE NO."
                        className='input-box'
                        required
                        {...register('phone', { required: 'Phone number is required' })}
                    />
                    <input
                        type="email"
                        placeholder="EMAIL ADDRESS"
                        className='input-box'
                        required
                        {...register('email', { required: 'Email is required' })}
                    />
                    <textarea
                        placeholder="MESSAGE"
                        required
                        className='input-box-area'
                        {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    <button type="submit" className='btn' disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : 'SEND'}
                    </button>
                </form>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                action={
                    <Button color="inherit" onClick={handleClose}>
                        Close
                    </Button>
                }
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ReachUs;
