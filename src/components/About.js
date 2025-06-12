import React from 'react';
import pic from '../../public/media/pic.png';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    return isMobile
 }


const About = () => {
    const match = useLocation()
    const isMobile = useIsMobile()

    return (
        <div>
            <Navbar path={match.pathname}/>
            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:0.5}}>
                <div className={ isMobile ? 'about-container-mobile': 'about-container'}>
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
                    <div className={ isMobile ? 'about-container-mobile-bio' : 'about-container-bio'}>
                        <div className='title'>
                            <p>About</p>
                        </div>
                        <div className='info'>
                            <p>
                                A journey through IBM began with hands-on work with Kubernetes UIs for IBM Cloud Private, blending React, Node.js, and JavaScript to create fast, scalable interfaces. Server-side rendering and Redux delivered snappy, stateful experiences, while Go operators and Docker containers provided the backbone for reliable deployments and orchestration.
                            </p>
                            <p>
                                Next chapters included orchestrating powerful data streaming and processing platforms. Deploying Apache Flink and Elasticsearch services through custom Go operators ensured a pivotal migration from the deprecated Google Flink Operator to the robust Apache Flink Kubernetes Operator—unlocking new heights for big data workloads.
                                DevOps and automation became daily companions. CI/CD pipelines, crafted with Travis CI, Jenkins, and GitHub Actions, ensured IBM products moved seamlessly from development to delivery. Bash scripts and automated validation routines kept quality high and manual toil low.
                                Clouds—AWS, Azure, and IBM Cloud—were tamed with a system designed to make SaaS onboarding effortless. Product data found a home in MongoDB, managed by Go APIs, while Tekton pipelines and Argo CD worked behind the scenes, syncing repositories and registering offerings in cloud marketplaces with a single webhook trigger.
                            </p>
                            <p>
                                From building mobile app components with React Native and automating UI tests with Appium, to designing scalable backend systems and streamlining product automation, each chapter at IBM has been about solving complex problems and making technology work smarter, faster, and more intuitively for everyone involved.
                            </p>
                        </div>
                    </div>      
                </div>
            </motion.div>
        </div>
    );
};

export default About
