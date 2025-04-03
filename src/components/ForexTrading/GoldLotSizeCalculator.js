import React, { useState } from 'react';
import './ForexTrading.scss';

export default function GoldLotSizeCalculator() {
  const [entry, setEntry] = useState('');
  const [sl, setSl] = useState('');
  const [risk, setRisk] = useState(0);
  const [pipValue, setPipValue] = useState(1);
  const [offset, setOffset] = useState(1);

  const stopLossDistance = () => {
    return Math.ceil(Math.abs((entry - sl)) * 100);
  };

  const lotSize = () => {
    const result = (risk / (stopLossDistance() * pipValue)) - offset/100;
    return isNaN(result) ? 0 : result.toFixed(2);
  };

  const microLotSize = () => {
    return lotSize() * 100 || 0;
  };

  const copyText = (text) => {
    navigator.clipboard
      .writeText(`${text}`)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        //eslint-disable-next-line no-console
        console.error("Failed to copy: ", err);
        alert("Failed to copy to clipboard.");
      });
  };

  return (
    <div className='site container'>
      <h2>Gold lot size calculator</h2>
      <div className='box'>
        Entry <input type='text' name='entry' value={entry}
                     onChange={(e) => setEntry(e.target.value)}/>
        <br/><br/>
        Stop loss <input type='text' name='sl' value={sl} onChange={(e) => setSl(e.target.value)}/>
        <br/><br/>
        Risk ($) <input type='text' name='risk' value={risk}
                        onChange={(e) => setRisk(e.target.value)}/>
        <br/><br/>
        Pip value <input type='text' name='pipValue' value={pipValue}
                         onChange={(e) => setPipValue(e.target.value)}/>
        <br/><br/>
        Offset to mitigate charges <input type='text' name='offset' value={offset}
                                          onChange={(e) => setOffset(e.target.value)}/>
        <hr/>
        <p>Stop loss distance {stopLossDistance()}</p>
        <p>
          Lot size {lotSize()}
          &emsp; <button onClick={() => copyText(lotSize())}>Copy text</button>
        </p>
        <p>
          Micro lot size {microLotSize()}
          &emsp; <button onClick={() => copyText(microLotSize())}>Copy text</button>
        </p>
      </div>
    </div>
  );
}
