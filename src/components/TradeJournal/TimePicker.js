import React from "react";
// import PropTypes from "prop-types";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const TimePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DateTimePicker
          label="Basic date time picker"
          ampm={false}
          slotProps={
            {
              actionBar: {
                actions: ['clear', 'cancel', 'today'],
              },
            }}
          value={value.isValid() ? value : null}
          onChange={onChange}
        />
      </div>
    </LocalizationProvider>
  );
};

TimePicker.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
