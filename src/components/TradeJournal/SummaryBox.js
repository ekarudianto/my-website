import React from "react";
import PropTypes from "prop-types";
import './TradeJournal.scss';
import {getCurrentMonth, getImages} from "../../utils/util";

const SummaryBox = ({ rows }) => {
  const DATE_TIME_FORMAT = 'DD-MM-YYYY HH:mm';

  const transformRows = (rows) => {
    return rows.map(row => {
      const images = getImages(row);
      const mappedImages = images.map(img => {
        return `${img.label}:${img.url}`;
      }).join(';');

      return [
        row.ticker,
        row.entryDatetime.isValid() ? row.entryDatetime.format(DATE_TIME_FORMAT) : '',
        row.longShort,
        row.entry,
        row.lotSize,
        row.trend4h,
        row.trend15m,
        row.trend3m,
        row.tierPricingLevel,
        row.takeProfit,
        row.stopLoss,
        row.exitDatetime.isValid() ? row.exitDatetime.format(DATE_TIME_FORMAT) : '',
        row.exitPrice,
        row.gainLoss,
        row.setup,
        row.comment,
        mappedImages,
        row.lostTest,
        row.imbalance,
        row.inducement,
        row.badTrade,
        row.newsImpactedTrade,
        row.overnightFee,
      ].join(',');
    }).join('|');
  };

  const copyToClipboard = () => {
    const stringToCopy = transformRows(rows);
    navigator.clipboard
      .writeText(`[${stringToCopy}]`)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        //eslint-disable-next-line no-console
        console.error("Failed to copy: ", err);
        alert("Failed to copy to clipboard.");
      });
  };

  const sendData = async () => {
    const data = rows.map((row) => {
      const {
        ticker,
        entryDatetime,
        longShort,
        entry,
        lotSize,
        trend4h,
        trend15m,
        trend3m,
        tierPricingLevel,
        takeProfit,
        stopLoss,
        exitDatetime,
        exitPrice,
        gainLoss,
        setup,
        comment,
        lostTest,
        imbalance,
        inducement,
        badTrade,
        newsImpactedTrade,
        overnightFee,
      } = row;

      return {
        ticker,
        entryDatetime: entryDatetime.format(DATE_TIME_FORMAT),
        longShort,
        entry,
        lotSize,
        trend4h,
        trend15m,
        trend3m,
        tierPricingLevel,
        takeProfit,
        stopLoss,
        exitDatetime: exitDatetime.format(DATE_TIME_FORMAT),
        exitPrice,
        gainLoss,
        setup,
        comment,
        images: getImages(row, false),
        lostTest,
        imbalance,
        inducement,
        badTrade,
        newsImpactedTrade,
        overnightFee,
    }});
    const WEB_APP_URL = 'https://proxy-server-1043115498805.us-central1.run.app/macros/s/AKfycbypsLZ1yfXL2b7aAZi6e2csRBxDghbuZ54TIKu0m_DtkokGmhw2bY5NJN8sgXMoza4oSQ/exec';
    // const WEB_APP_URL = 'http://localhost:3001/macros/s/AKfycbypsLZ1yfXL2b7aAZi6e2csRBxDghbuZ54TIKu0m_DtkokGmhw2bY5NJN8sgXMoza4oSQ/exec';

    try {
      const response = await fetch(`${WEB_APP_URL}?sheet=${getCurrentMonth()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });
      const result = await response.json();
      if (result.success) {
        alert('Data added successfully!');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error inserting data:', error);
      alert('Failed to add data.');
    }
  }

  return (
    <div>
      <button onClick={copyToClipboard}>Copy text</button>
      <button onClick={sendData} style={{marginLeft: '10px'}}>Submit data to GSheet</button>
      <br/>
      <div className='string-list-container'>{transformRows(rows)}</div>
    </div>
  );
}

SummaryBox.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default SummaryBox;
