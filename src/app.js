import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Parallax, ParallaxLayer } from 'react-spring'
import Introduction from './components/Introduction.js'
import Work from './components/Work.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  scroll = (to) => this.refs.parallax.scrollTo(to);
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

ReactDOM.render(<App />, document.getElementById('app'))
