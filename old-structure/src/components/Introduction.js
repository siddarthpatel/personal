import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax'
import '../styles/components/introduction.css'

const Introduction = (props) => {
  return(
      <ParallaxLayer className="container" offset={props.offset} speed={props.speed}  onClick={props.onClick}>
          <div className="sub-container">
            <h1>Hi,</h1>
            <h2>I am Siddarth Patel</h2>
          </div>
      </ParallaxLayer>
  );
};

export default Introduction;
