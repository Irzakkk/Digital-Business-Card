import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './info/info.js';
import About from './about/about.js';
import Ftr from './footer/footer.js';
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    {/* <App/> */}
    <Info/>
    <About/>
    <Ftr/>
  </div>
);
