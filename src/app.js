import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Parallax } from '@react-spring/parallax'
import Introduction from './components/Introduction.js'
import Work from './components/Work.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.parallaxRef = React.createRef(); // Create a ref for the Parallax component
  }

  scroll = (to) => {
    if (this.parallaxRef.current) {
      this.parallaxRef.current.scrollTo(to);
    }
  };

  render(){
    return (
      <div>
        <Parallax ref="parallax" pages={3} vertical scrolling={false}>
            <Introduction offset={0} speed={0.2} onClick={()=>this.scroll(1)}/>
            <Work offset={1} speed={0.3} onClick={()=>this.scroll(2)}/>
            <Contact offset={2} speed={0.4} onClick={()=>this.scroll(0)}/>
        </Parallax>
        <Footer/>
      </div>
    );
  };
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
