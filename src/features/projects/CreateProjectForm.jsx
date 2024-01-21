
import { XIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useOutsideClick from "../../hooks/useOutsideClick";
import toast from "react-hot-toast";
import DatePickerField from "../../UI/projects/DatePickerField";
import CreateProjectField from "../../UI/projects/CreateProjectField";
import TagInput from "../../UI/TagInput";
import useCreateProject from "./projectsHooks/useCreateProject";
import Loader from "../../UI/Loader";
function CreateProjectForm({ open, onClose }) {
  const { register, handleSubmit,reset } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState("");
  const {createProject,isCreating} = useCreateProject()
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline:new Date(date).toISOString()
    }
    createProject(newProject,
      {
        onSuccess:()=>{
          reset()
        }
      })
  };
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop flex items-center justify-center">
        <div
          ref={ref}
          className="bg-white w-[calc(100vw-4rem)]  max-h-[700px] overflow-auto  rounded-lg shadow-xl max-w-screen-sm p-4"
        >
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-b-secondary-300">
            <h2 className="text-xl font-bold text-cyan-800">
              ایجاد پروژه جدید
            </h2>
            <XIcon
              className="transition-all hover:text-red-500"
              onClick={onClose}
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-y-4 text-cyan-800"
          >
            <CreateProjectField
              label="عنوان پروژه"
              name={"title"}
              register={register}
            />
            <CreateProjectField
              label="توضیحات"
              name={"description"}
              register={register}
            />
            <TagInput tags={tags} setTags={setTags}/>
            <CreateProjectField
              label="دسته بندی"
              name={"category"}
              register={register}
            />
            <CreateProjectField
              label="بودجه"
              name={"budget"}
              register={register}
            />
            <DatePickerField label="ددلاین" date={date} setDate={setDate} />
            <button type="submit" className="verifyButton" disabled={isCreating}>
              {isCreating ? <Loader/> : "              ایجاد پروژه جدید"}
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default CreateProjectForm;
