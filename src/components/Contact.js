import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import resume from '../../public/media/Resume.pdf';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';

const useIsMobile = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    return isMobile
 }

const Contact = () => {
    const match = useLocation()
    const isMobile = useIsMobile()

    return (
        <div>
            <Navbar path={match.pathname} />
            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:0.5}}>
                <div className={isMobile ? 'contact-container-mobile' : 'contact-container'}>
                    <div className='title'>
                        <p>Contact</p>
                    </div>
                    <div className='info'>
                        <p>Feel free to send me message on <a href={'https://x.com/GojoSatoru27788'} target='_blank'>twitter</a> or you can also send me an email at siddarthjpatel@gmail.com.</p>
                    </div>
                    <div className='links'>
                        <div className='title'>
                            <p>Other links</p>
                        </div>
                        <div className='info'>
                            <div>
                                Resume
                                <a href={resume} target='_blank'>
                                    <div style={{color:'black', margin: 'auto', display:'flex', width:'auto'}}>
                                        <FaRegFileAlt style={{ paddingTop: '1px', marginRight: '2px'}}/>
                                        <span>siddarth_patel</span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                Linkedin 
                                <a href='https://linkedin.com/in/siddarthpatel' target='_blank'>
                                    <div style={{color:'black', margin: 'auto', display:'flex', width:'auto'}}>
                                        <FaLinkedin style={{paddingTop: '1px', marginRight: '2px'}}/>
                                        <span>siddarthpatel</span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                Github
                                <a href='https://github.com/siddarthpatel' target='_blank'>
                                    <div style={{color:'black', margin: 'auto', display:'flex', width:'auto'}}>
                                        <FaGithub style={{paddingTop: '1px', marginRight: '2px'}}/>
                                        <span>siddarthpatel</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact
