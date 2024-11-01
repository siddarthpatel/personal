import React from 'react';
// import ReactDOM from 'react-dom/client';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-container-personal'>
                <p>Siddarth Patel</p>
                <p>Software Engineer in Raleigh/Durham</p>
            </div>
            <div className='about-container-bio'>
                <p>
                    Software developer at IBM. Products/Organisations worked under include IBM Cloud Private, IBM Cloud Pak foundational services, Cloud Pak Engineering Devops, and Multicloud SaaS Automation Platform. 
                    Technologies and tools used include Kubernetes, Openshift, Flink/Kafka, Javascript, React, Node, Golang, AWS, and Python
                </p>
            </div>      
        </div>
    );
};

export default About
