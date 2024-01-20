import { data } from "autoprefixer";
import { XIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useOutsideClick from "../../hooks/useOutsideClick";
import toast from "react-hot-toast";
import DatePickerField from "../../UI/projects/DatePickerField";
function CreateProjectForm({ open, onClose }) {
  const { register, handleSubmit } = useForm();
  const [tags,setTags]=useState([])
  const [date,setDate] =useState()
  const [openDatePicker,setOpenDatePicker] = useState(false)
  const onSubmit = (data) => {
    console.log(data);
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
            className=" flex flex-col gap-y-4"
          >
            <label htmlFor="title">عنوان پروژه</label>
            <input
              name="title"
              id="title"
              type="text"
              className="createProjectFormInput"
              {...register("title")}
            />
                        <label htmlFor="description">توضیحات</label>
            <input
              id="description"
              name="description"
              type="text"
              className="createProjectFormInput"
              {...register("description")}
            />
                        <label htmlFor="tags">تگ ها</label>
            <input
              id="tags"
              name="tags"
              type="text"
              className="createProjectFormInput"
              {...register("tags")}
            />
                        <label htmlFor="category">دسته بندی</label>
            <input
              id="category"
              name="category"
              type="text"
              className="createProjectFormInput"
              {...register("category")}
            />
                        <label htmlFor="budget">بودجه</label>
            <input
              id="budget"
              name="budget"
              type="text"
              className="createProjectFormInput"
              {...register("budget")}
            />
<DatePickerField label="ددلاین" date={date} setDate={setDate}/>
            <button type="submit" className="verifyButton">send</button>
          </form>
        </div>
      </div>
    )
  );
}

export default CreateProjectForm;
