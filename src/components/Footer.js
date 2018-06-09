import React from 'react';
import { ParallaxLayer } from 'react-spring'

const Footer = () => {
  return(
      <div style={styles.footer}>
        <p>
          <a title="resume" href="/media/resume.pdf" target="_blank"><i className="fas fa-file-alt"></i></a>
          <a href="https://github.com/siddarthpatel" target="_blank"><i className="fab fa-github-alt"></i></a>
          <a href="https://www.linkedin.com/in/siddarthpatel/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/siddarth.patel.16" target="_blank"><i className="fab fa-facebook"></i></a>
        </p>
      </div>
  );
};

const styles = {
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100px',
    textAlign: 'center',
    fontSize: '14px',
    fontFamily: 'Lato',
    fontWeight: '300',
    color: '#FFFFFF'
  },
}

export default Footer
