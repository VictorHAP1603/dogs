import React from "react";
import "../../css/Form/Button.css";

const Button = ({ value, ...props }) => {
  return (
    <button {...props} className="button">
      {value}
    </button>
  );
};

export default Button;
