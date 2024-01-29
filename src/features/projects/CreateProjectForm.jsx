import { XIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CreateProjectField from "./CreateProjectField";
import TagInput from "../../UI/TagInput";
import useCreateProject from "./projectsHooks/useCreateProject";
import Loader from "../../UI/Loader";
import CategoryDropdown from "../category/CategoryDropdown";
import useEditProject from "./projectsHooks/useEditProject";
import DatePickerField from "./DatePickerField";
function CreateProjectForm({ open, onClose, project = {} }) {
  const { _id: editId } = project;
  const {
    title,
    deadline,
    tags: prevTags,
    budget,
    description,
    category,
  } = project;

  const isEditSession = Boolean(editId);

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      budget,
      description,
      category: category?._id,
    };
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({defaultValues:editValues});

  const [tags, setTags] = useState(prevTags || []);
  const [date,setDate] = useState(new Date(deadline|| ""))
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditting } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline:new Date(date).toISOString(),
      tags,
    };
    if(isEditSession){
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
      console.log(newProject,editId)
    }else{
      createProject(newProject, {
        onSuccess: () => {
          reset();
          onClose();
          setTags([]);
        },
      });
      console.log(newProject)
    }
  };
  // const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop flex items-center justify-center z-[10000]">
        <div
          // ref={ref}
          className="bg-white w-[calc(100vw-4rem)]  max-h-[700px] overflow-auto  rounded-lg shadow-xl max-w-screen-sm p-4 dark:bg-slate-800 dark:text-white"
        >
          <div className="flex justify-between items-center pb-4 mb-4 border-b dark:border-b-slate-400 border-b-secondary-300">
            <h2 className="text-xl font-bold text-cyan-800 dark:text-white">
              {isEditSession ? "ویرایش پروژه" : "ایجاد پروژه جدید"}
            </h2>
            <XIcon
              className="transition-all hover:text-red-500"
              onClick={onClose}
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-y-4 text-cyan-800 dark:text-gray-50"
          >
            <CreateProjectField
              label="عنوان پروژه"
              name={"title"}
              register={register}
              required
              errors={errors}
              validationSchema={{
                required: "عنوان پروژه ضروری است",
                minLength: {
                  value: 5,
                  message: "طول عنوان کافی نیست",
                },
                maxLength: {
                  value: 15,
                  message: "طول عنوان بیش از حد مجاز است",
                },
              }}
            />
            <CreateProjectField
              label="توضیحات"
              name={"description"}
              register={register}
              required
              errors={errors}
              validationSchema={{
                required: "توضیحات پروژه ضروری است",
                minLength: {
                  value: 10,
                  message: "طول توضیحات کافی نیست",
                },
                maxLength: {
                  value: 85,
                  message: "طول توضیحات بیش از حد مجاز است",
                },
              }}
            />
            <TagInput tags={tags} setTags={setTags} />
            <Controller
              name="category"
              control={control}
              rules={{ required: "دسته بنده پروژه را مشخص کنید" }}
              render={({ field, field: { name } }) => (
                <CategoryDropdown field={field} errors={errors} name={name} />
              )}
            />
            <CreateProjectField
              label="بودجه"
              name={"budget"}
              register={register}
              errors={errors}
              required
              type="number"
              validationSchema={{
                required: "لطفا بودجه مورد نظر را وارد کنید",
              }}
            />
                <DatePickerField
                  label="ددلاین"
                  onChange={setDate}
                  value={date}
                  errors={errors}
                />
            <button
              type="submit"
              className="verifyButton"
              disabled={isCreating}
            >
              {isCreating ? <Loader /> : "ایجاد پروژه جدید"}
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default CreateProjectForm;
