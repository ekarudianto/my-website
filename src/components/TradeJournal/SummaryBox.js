import React from "react";
import PropTypes from "prop-types";
import './TradeJournal.scss';

const SummaryBox = ({ rows }) => {
  const DATE_TIME_FORMAT = 'DD-MM-YYYY HH:mm';

  const transformRows = (rows) => {
    return rows.map(row => {
      const images = [];

      if (row['1mScreenshot']) {
        images.push({
          label: '1m',
          url: row['1mScreenshot'],
        });
      }

      if (row['3mScreenshot']) {
        images.push({
          label: '3m',
          url: row['3mScreenshot'],
        });
      }

      if (row['15mScreenshot']) {
        images.push({ label: '15m', url: row['15mScreenshot'] });
      }

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
        JSON.stringify(images),
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

  return (
    <div>
      <button onClick={copyToClipboard}>Copy text</button>
      <br />
      <div className='string-list-container'>{transformRows(rows)}</div>
    </div>
  );
}

SummaryBox.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default SummaryBox;
