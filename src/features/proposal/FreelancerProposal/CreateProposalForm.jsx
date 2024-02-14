import React from "react";
import { useForm } from "react-hook-form";
import CreateProjectField from "../../projects/CreateProjectField";
import VerifyButton from "../../../UI/VerifyButton";
import { Button } from "../../../UI/shadcn/Button";
import { useAddProposal } from "./proposalHooks/useAddProposal";
//duration description price projectId
function CreateProposalForm({ projectId ,onClose}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {createProposal,isCreating} = useAddProposal()
  const submitHandler = (data) => {
    const newProposal = {
        ...data,
        projectId
    }
    createProposal({...data,projectId},{onSuccess:()=>onClose()})
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-y-4 text-cyan-800 dark:text-gray-50"
      >
        <CreateProjectField
          errors={errors}
          label="توضیحات"
          name="description"
          type="text"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
          }}
        />
        <CreateProjectField
          errors={errors}
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
        />
        <CreateProjectField
          errors={errors}
          label="مدت زمان"
          name="duration"
          type="text"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
        />
        <Button
          type="submit"
          className="bg-sky-400 hover:bg-sky-600 dark:bg-indigo-400 dark:hover:bg-indigo-600 text-white h-[40px]"
        >
          ثبت پیشنهاد
        </Button>
      </form>
    </div>
  );
}

export default CreateProposalForm;
