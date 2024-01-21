import React from "react";

function CreateProjectField({ validationSchema={}, name, register, label }) {
  return (
    <>
      <label htmlFor="budget">{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        className="createProjectFormInput hover:shadow-lg transition-all"
        {...register(name,validationSchema)}
      />
    </>
  );
}

export default CreateProjectField;
