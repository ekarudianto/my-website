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

  return (
    <div>
      <button>Copy text</button>
      <br />
      <div className='string-list-container'>{transformRows(rows)}</div>
    </div>
  );
}

SummaryBox.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default SummaryBox;
