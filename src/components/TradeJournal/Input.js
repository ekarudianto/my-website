import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange }) => {
  return (
    <div>
      <input
        id="inputField"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter text here"
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
