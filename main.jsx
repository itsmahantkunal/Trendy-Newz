import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.jsx'
// Remove unused import
// import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
