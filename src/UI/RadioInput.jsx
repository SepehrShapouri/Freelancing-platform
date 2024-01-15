import React from "react";

function RadioInput({ label, name, id, onChange, value, checked ,extraClasses =""}) {
  return (
    <span className="flex">
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
        className={`hover:text-slate-500 transition ease-in duration-200 ${extraClasses}`}
      >
        {label}
      </label>
    </span>
  );
}

export default RadioInput;
