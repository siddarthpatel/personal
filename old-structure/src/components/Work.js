import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import '../styles/components/work.css'

const Work = (props) => {
  return(
      <ParallaxLayer offset={props.offset} speed={props.speed}  onClick={props.onClick} className="container-w">
          <div className="sub-container-w">
            <h1>Work,</h1>
            <h2>Software Engineer at IBM!</h2>
          </div>
      </ParallaxLayer>
  );
};

export default Work;
