import React from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const TimePicker = ({ value, onChange, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DateTimePicker
          label={label || 'Date and Time'}
          format={'DD-MM-YYYY HH:mm'}
          ampm={false}
          slotProps={
            {
              actionBar: {
                actions: ['clear', 'cancel', 'today'],
              },
            }}
          sx={{ width: 230 }}
          value={value.isValid() ? value : null}
          onChange={onChange}
        />
      </div>
    </LocalizationProvider>
  );
};

TimePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
