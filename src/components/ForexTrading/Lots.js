import React, { useState } from 'react';
import './ForexTrading.scss';

export default function Lots() {
  const [risk, setRisk] = useState(0);
  const [stopLostPips, setStopLostPips] = useState(0);
  const lotsValue = () => {
    const stopLost = stopLostPips * 10;
    const result = risk/stopLost;
    return result || 0;
  }

  return (
    <div className='site container'>
      <h2>Lots</h2>
      <p>
        Lots formula contains of how many $ are you willing to risk (Risk) and the Stop Lost point in which you can set (SLPips). Now if you have those values set, you can then have how many lots can you enter in a transaction, this way you can manage your risk easily in forex trading.
      </p>
      <div className='box'>
        Risk <input type='text' name='risk' value={risk} onChange={(e) => setRisk(e.target.value)}/>
        <br />
        SLPips <input type='text' name='bidPrice' value={stopLostPips} onChange={(e) => setStopLostPips(e.target.value)}/>
        <p>Lots that you can buy is equal to {lotsValue()} (displayed in quoted currency)</p>
      </div>
    </div>
  );
}
