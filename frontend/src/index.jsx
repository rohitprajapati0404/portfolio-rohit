import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
