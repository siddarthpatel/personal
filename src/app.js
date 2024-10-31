import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <div>
        HI NEW UI
      </div>
    );
  };
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
