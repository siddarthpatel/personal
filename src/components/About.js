import React from 'react';
import pic from '../../public/media/pic.png';
import Navbar from './NavBar';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const About = () => {
    const match = useLocation()

    return (
        <div>
            <Navbar path={match.pathname}/>
            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:0.5}}>
                <div className='about-container'>
                    <div className='about-container-personal'>
                        <div className='about-container-personal-details'>
                            <div className='pic'>
                                <img src={pic} alt='profile-pic' />
                            </div>
                            <div className='occupation'>
                                <h3>Siddarth Patel</h3>
                                <p>Software Engineer in Raleigh/Durham</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-container-bio'>
                        <div className='title'>
                            <p>About</p>
                        </div>
                        <div className='info'>
                            <p>
                                For the past 6 years, I have been working as a software engineer on cloud computing at IBM.
                            </p>
                            <p>
                                As a full stack engineering, I specialize in developing and deploying conternized micro-services on Openshift Containerized Platform using Kubernetes as a container orchestrator.
                                I have golang experience in developing a go operator which is used to deploy resources required to manage/scale a micro-service on a containerized platform.
                            </p>
                            <p>
                                Apart from that, I have experience with devops/automation through building a delivery only Travis CI pipeline to publish IBM products out to the real world and automate onboarding for IBM SaaS solutions
                                that want to get deployed on hyperscalers like AWS, Azzure and IBM cloud.
                            </p>
                            <p>
                                Outside of work, I enjoy working on <a href={'https://github.com/org-not-included'} target="_blank">open source projects</a>, learning about <a href={'https://github.com/siddarthpatel/ds-tour/tree/main/DESIGN'} target='_blank'>system design</a>, and <a href={'https://github.com/siddarthpatel/data-processing'} target="_blank">data engineering.</a>
                            </p>
                        </div>
                    </div>      
                </div>
            </motion.div>
        </div>
    );
};

export default About
