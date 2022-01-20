import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import App from './src/App';
import Projects from './src/components/Projects';
import ForexTrading from './src/components/ForexTrading';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path='forex-trading' element={<ForexTrading />} />
      {/*<Route path="/" element={<ForexTrading />} />*/}
    </Routes>
  </BrowserRouter>
  , document.getElementById('app'));
