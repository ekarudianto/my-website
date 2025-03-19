import React from "react";
import PropTypes from "prop-types";
import './TradeJournal.scss';

const SummaryBox = ({ rows }) => {
  const transformRows = (rows) => {
    return rows.map(row => {
      return [
        row.ticker,
        row.entryDatetime,
        row.longShort,
        row.lotSize,
        row.trend4h,
        row.trend15m,
        row.trend3m,
        row.tierPricingLevel,
        row.entry,
        row.takeProfit,
        row.stopLoss,
        row.exitDatetime,
        row.exitPrice,
        row.gainLoss,
        row.setup,
        row.comment,
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
