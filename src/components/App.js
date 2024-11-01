import React from 'react';
import {   BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './NavBar';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
