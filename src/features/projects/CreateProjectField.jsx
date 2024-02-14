import React from "react";

function CreateProjectField({ type="text",validationSchema={}, name, register, label,required,errors }) {
  return (
    <>
      <label htmlFor="budget" className="font-medium">{label} {required && <span className="text-rose-500">*</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="createProjectFormInput hover:shadow-lg transition-all dark:bg-slate-700 dark:focus:ring-indigo-500"
        {...register(name,validationSchema)}
      />
      {errors && errors[name] && <span className="text-rose-500 text-xs">{errors[name]?.message}</span>}
    </>
  );
}

export default CreateProjectField;
