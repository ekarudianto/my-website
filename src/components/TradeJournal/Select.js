import React from 'react';
import PropTypes from "prop-types";

const Select = ({ value, onChange, options }) => {
  return (
    <div>
      <select id="dropdown" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
