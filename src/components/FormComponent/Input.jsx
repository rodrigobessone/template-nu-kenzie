import React from "react";

function Input({ label, type, placeholder, ...rest }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </>
  );
}

export default Input;
