import React from "react";

import "../../css/Form/Input.css";

const Input = ({ label, type, value, onChange, error, onBlur }) => {
  return (
    <div className="wrapper-input">
      <label className="label">
        <p>{label}</p>
        <input
          className="input"
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
