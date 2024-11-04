import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';

// import Navbar from './NavBar';

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
      {/* <Navbar /> */}
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
