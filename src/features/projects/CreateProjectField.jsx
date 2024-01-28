import React from "react";

function CreateProjectField({ type="text",validationSchema={}, name, register, label,required,errors }) {
  return (
    <>
      <label htmlFor="budget" className="font-medium ">{label} {required && <span className="text-error">*</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="createProjectFormInput hover:shadow-lg transition-all "
        {...register(name,validationSchema)}
      />
      {errors && errors[name] && <span className="text-error text-xs">{errors[name]?.message}</span>}
    </>
  );
}

export default CreateProjectField;
