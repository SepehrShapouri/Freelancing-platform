import React from "react";

function TextField({label,name,value,onChange,type ="text",register,validationSchema,errors}) {
  return (
    <>
      <label htmlFor={name} className="self-start">
        {label}
      </label>
      <input
        type={type}
        className={` textField__input sm:self-start`}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextField;
