import React from "react";
import {Tooltip} from "react-tooltip";
import dayjs from "dayjs";
import Input from "./Input";
import './TradeJournal.scss'
import Select from "./Select";
import SummaryBox from "./SummaryBox";
import TimePicker from "./TimePicker";

const TREND_OPTIONS = [
  { value: "u", label: "Uptrend" },
  { value: "d", label: "Downtrend" },
];

export default function TradeJournal() {
  const [rows, setRows] = React.useState([]);
  const [lastAddedRowId, setLastAddedRowId] = React.useState(null);

  const addNewRow = () => {
    const newRow = {
      id: Date.now(), // Unique ID for each row
      ticker: "GOLD",
      entryDatetime: dayjs(null),
      longShort: "",
      lotSize: "",
      trend4h: "u",
      trend15m: "u",
      trend3m: "u",
      tierPricingLevel: "",
      entry: "",
      takeProfit: "",
      stopLoss: "",
      exitDatetime: dayjs(null),
      exitPrice: "",
      gainLoss: "",
      setup: "",
      comment: "",
      '1mScreenshot': "",
      '3mScreenshot': "",
      '15mScreenshot': "",
    };
    setRows([...rows, newRow]);
    setLastAddedRowId(newRow.id);
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setRows(
      rows.map((row) =>
        row.id === id ? Object.assign({}, row, { [field]: value }) : row
      ));
  };

  return (
    <div className='site container'>
      <h2>Gold Trade Journal</h2>
      <button onClick={addNewRow}>Add entry</button>
      <table className='trade-journal-table'>
        <thead>
        <tr>
          <td colSpan={2}>Ticker</td>
          <td>Entry datetime</td>
          <td>Long/Short</td>
          <td>Lot size</td>
          <td>4h trend</td>
          <td>15m trend</td>
          <td>3m trend</td>
          <td>3m tier pricing level</td>
          <td>Entry</td>
          <td>Take profit</td>
          <td>Stop loss</td>
          <td>Exit datetime</td>
          <td>Exit price</td>
          <td>Gain/Loss</td>
          <td data-tooltip-id="setup-tooltip">Setup</td>
          <td>Comment</td>
          <td>1m Screenshot</td>
          <td>3m Screenshot</td>
          <td>15m Screenshot</td>
        </tr>
        </thead>
        <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>
              <button onClick={() => removeRow(row.id)}>Remove</button>
            </td>
            <td>
              <Input
                value={row.ticker}
                onChange={(e) =>
                  handleInputChange(row.id, "ticker", e.target.value)
                }
                autoFocus={row.id === lastAddedRowId}
                readOnly={true}
              />
            </td>
            <td>
              <TimePicker
                label="Entry datetime"
                value={row.entryDatetime}
                onChange={(e) => handleInputChange(row.id, "entryDatetime", e)}
              />
            </td>
            <td>
              <Input
                value={row.longShort}
                onChange={(e) =>
                  handleInputChange(row.id, "longShort", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row.lotSize}
                onChange={(e) =>
                  handleInputChange(row.id, "lotSize", e.target.value)
                }
              />
            </td>
            <td>
              <Select
                value={row.trend4h}
                onChange={(e) =>
                  handleInputChange(row.id, "trend4h", e.target.value)
                }
                options={TREND_OPTIONS}
              />
            </td>
            <td>
              <Select
                value={row.trend15m}
                onChange={(e) =>
                  handleInputChange(row.id, "trend15m", e.target.value)
                }
                options={TREND_OPTIONS}
              />
            </td>
            <td>
              <Select
                value={row.trend3m}
                onChange={(e) =>
                  handleInputChange(row.id, "trend3m", e.target.value)
                }
                options={TREND_OPTIONS}
              />
            </td>
            <td>
              <Input
                value={row.tierPricingLevel}
                onChange={(e) =>
                  handleInputChange(row.id, "tierPricingLevel", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row.entry}
                onChange={(e) =>
                  handleInputChange(row.id, "entry", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row.takeProfit}
                onChange={(e) =>
                  handleInputChange(row.id, "takeProfit", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row.stopLoss}
                onChange={(e) =>
                  handleInputChange(row.id, "stopLoss", e.target.value)
                }
              />
            </td>
            <td>
              <TimePicker
                label="Exit datetime"
                value={row.exitDatetime}
                onChange={(e) => handleInputChange(row.id, "exitDatetime", e)}
              />
            </td>
            <td>
              <Input
                value={row.exitPrice}
                onChange={(e) =>
                  handleInputChange(row.id, "exitPrice", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row.gainLoss}
                onChange={(e) =>
                  handleInputChange(row.id, "gainLoss", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row.setup}
                onChange={(e) =>
                  handleInputChange(row.id, "setup", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row.comment}
                onChange={(e) =>
                  handleInputChange(row.id, "comment", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row['1mScreenshot']}
                onChange={(e) =>
                  handleInputChange(row.id, "1mScreenshot", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row['3mScreenshot']}
                onChange={(e) =>
                  handleInputChange(row.id, "3mScreenshot", e.target.value)
                }
              />
            </td>
            <td>
              <Input
                value={row['15mScreenshot']}
                onChange={(e) =>
                  handleInputChange(row.id, "15mScreenshot", e.target.value)
                }
              />
            </td>

          </tr>
        ))}
        </tbody>
      </table>
      {rows.length > 0 && <SummaryBox rows={rows}/>}

      {/*
          Current setup types
          1. Spike model
          2. FBoS
          3. Deeper mitigation
          4. Tama setup
          5. Hammer reversal
          6. Inverted hammer reversal
          7. NC
          8. Other
       */}
      <Tooltip id="setup-tooltip">
        <div>
          <p>Setup type</p>
          <ul>
            <li>1. Spike model</li>
            <li>2. FBoS</li>
            <li>3. Deeper mitigation</li>
            <li>4. Tama setup</li>
            <li>5. Hammer reversal</li>
            <li>6. Inverted hammer reversal</li>
            <li>7. NC</li>
            <li>8. Other</li>
          </ul>
        </div>
      </Tooltip>
    </div>
  );
}
