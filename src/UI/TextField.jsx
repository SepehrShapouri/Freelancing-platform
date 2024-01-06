import React from "react";

function TextField({label,name,value,onChange,type}) {
  return (
    <>
      <label htmlFor={name} className="self-start">
        {label}
      </label>
      <input
        type={type}
        className="textField__input"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default TextField;
