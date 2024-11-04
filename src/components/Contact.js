import React from 'react';
import Navbar from './NavBar';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const match = useLocation()
    return (
        <div>
            <Navbar path={match.pathname} />
            <div className='contact-container'>
                1234567890
            </div>
        </div>
    );
};

export default Contact
