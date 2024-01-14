import React from "react";

function RadioInput({ label, name, id, onChange, value, checked }) {
  return (
    <span className="flex items-center">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="form-radio text-cyan-900 focus:ring-0 ml-2 outline-none ring-0 border-none"
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="hover:text-slate-500 transition ease-in duration-200"
      >
        {label}
      </label>
    </span>
  );
}

export default RadioInput;
