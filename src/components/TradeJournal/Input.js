import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange, placeholder, autoFocus, readOnly }) => {
  return (
    <div>
      <input
        readOnly={readOnly}
        autoFocus={autoFocus}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
};

export default Input;
