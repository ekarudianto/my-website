import React from 'react';
import Spread from './Spread';
import Lots from './Lots';
import './ForexTrading.scss'

export default function ForexTrading() {
  return (
    <div className='site container'>
      <h2>Forex trading formulas</h2>
      <Spread />
      <Lots />
    </div>
  );
}
