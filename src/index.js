import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './components/App';
import '../styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('app')); // Create a root

root.render(
    <App />
);