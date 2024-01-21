
import { XIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useOutsideClick from "../../hooks/useOutsideClick";
import toast from "react-hot-toast";
import DatePickerField from "../../UI/projects/DatePickerField";
import CreateProjectField from "../../UI/projects/CreateProjectField";
import TagInput from "../../UI/TagInput";
function CreateProjectForm({ open, onClose }) {
  const { register, handleSubmit } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState();
  const onSubmit = (data) => {
    console.log(data)
  };
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop flex items-center justify-center">
        <div
          ref={ref}
          className="bg-white w-[calc(100vw-4rem)]  max-h-[800px] rounded-lg shadow-xl max-w-screen-sm p-4"
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
              label="توضیحات"
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
            <button type="submit" className="verifyButton">
              send
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default CreateProjectForm;
