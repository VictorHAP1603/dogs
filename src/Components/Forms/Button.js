import React from "react";
import styles from './Button.module.css' ;

const Button = ({ value, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {value}
    </button>
  );
};

export default Button;
