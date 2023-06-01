import React from "react";

function Select({ options, label, ...rest }) {
  return (
    <>
      <label>{label}</label>
      <select {...rest}>
        {options.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
