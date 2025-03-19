import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import App from './src/App';
import Projects from './src/components/Projects';
import ForexTrading from './src/components/ForexTrading';
import TradeJournal from "./src/components/TradeJournal";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path='forex-trading' element={<ForexTrading />} />
      <Route path='trade-journal' element={<TradeJournal />} />
    </Routes>
  </BrowserRouter>
  , document.getElementById('app'));
