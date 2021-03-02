import React from "react";

import styles from './Input.module.css' ;

const Input = ({ label, type, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapperInput}>
      <label className={styles.label}>
        <p>{label}</p>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
