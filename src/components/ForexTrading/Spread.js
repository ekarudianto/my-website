import React, { useState } from 'react';
import './ForexTrading.scss';

export default function Spread() {
  const [askPrice, setAskPrice] = useState(0);
  const [bidPrice, setBidPrice] = useState(0);
  const spreadPrice = () => {
    const result = askPrice - bidPrice;
    return result.toFixed(5);
  }

  return (
    <div className='site container'>
      <h2>Spread</h2>
      <p>
        Spread is a gap differences that you get from substracting an ask price to a bid price.
      </p>
      <div className='box'>
        Ask Price <input type='text' name='askPrice' value={askPrice} onChange={(e) => setAskPrice(e.target.value)}/> -
        Bid Price <input type='text' name='bidPrice' value={bidPrice} onChange={(e) => setBidPrice(e.target.value)}/>
        <p>Spread is equal to {spreadPrice()} (displayed in quoted currency)</p>
      </div>
    </div>
  );
}
