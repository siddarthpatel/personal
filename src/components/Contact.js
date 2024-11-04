import React from 'react';
import Navbar from './NavBar';
import { useLocation } from 'react-router-dom';
import resume from '../../public/media/Resume.pdf';
import { motion } from 'framer-motion';

const Contact = () => {
    const match = useLocation()
    return (
        <div>
            <Navbar path={match.pathname} />
            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:0.5}}>
                <div className='contact-container'>
                    <div className='title'>
                        <p>Contact</p>
                    </div>
                    <div className='info'>
                        <p>Feel free to shoot me an email at siddarthjpatel@gmail.com.</p>
                    </div>
                    <div className='links'>
                        <div className='title'>
                            <p>Other links</p>
                        </div>
                        <div className='info'>
                            <div>Linkedin<a href='https://linkedin.com/in/siddarthpatel' target='_blank'>siddarthpatel</a></div>
                            <div>Resume<a href={resume} target='_blank'>siddarth_patel</a></div>
                            <div>Github<a href='https://github.com/siddarthpatel' target='_blank'>siddarthpatel</a></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact
