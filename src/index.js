import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/home.css';
import './styles/contactUs.css';
import './styles/aboutUs.css';
import './styles/donate.css';
import './styles/nicepage.css';
import './styles/productDetailsTemplate.css';
import './images';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
