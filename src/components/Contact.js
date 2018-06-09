import React from 'react';
import { ParallaxLayer } from 'react-spring'
import '../styles/components/contact.css'

const Contact = (props) => {
  return(
      <ParallaxLayer offset={props.offset} speed={props.speed}  onClick={props.onClick} className="container-c">
          <div className="sub-container-c">
            <h1>Find me at,</h1>
            <h2>siddarthpatel97@gmail.com</h2>
          </div>
      </ParallaxLayer>
  );
};

export default Contact;
