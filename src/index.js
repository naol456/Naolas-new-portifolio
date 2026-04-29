/**
 * Entry Point - React Application
 * This is the main entry file that renders the React app into the DOM
 * 
 * What happens here:
 * 1. Import React and ReactDOM
 * 2. Import Bootstrap CSS for styling
 * 3. Import custom global styles
 * 4. Import the main App component
 * 5. Render the App into the root div in index.html
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS framework
import './index.css';  // Global custom styles
import App from './App';  // Main App component

// Create root and render the app
// StrictMode helps identify potential problems in the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
