import React from "react";
import useUser from "../features/authentication/authHooks/useUser";
import Loader from "../UI/Loader";
import { useUpdateProfle } from "../features/settings/settingHooks/useUpdateProfile";
import { useForm } from "react-hook-form";
import { CompleteProfileInput } from "../features/authentication/CompleteProfileForm";
import { Button } from "../UI/shadcn/Button";

function UserSettings() {
  const { user, isLoading } = useUser();
  const { name, email, phoneNumber, biography } = user || {};
  console.log(user);
  const { updateProfile, isPending: isUpdating } = useUpdateProfle();
  const { register, handleSubmit } = useForm({
    defaultValues: async () => user,
  });
  //name emai bio phone number
  const handleUpdate = ({name,email,phoneNumber,biography})=>{
    updateProfile({name,email,phoneNumber,biography})
  }
  return (
    <div className="dark:bg-slate-700 w-full h-full bg-blue-50 p-4 flex flex-col items-center gap-4 ">
      <h2 className="text-2xl font-bold text-cyan-800 dark:text-indigo-400 self-start">
        تنظیمات
      </h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[300px] sm:w-[400px] bg-white shadow-xl rounded-xl h-[400px]  dark:bg-slate-600">
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className="p-7 flex flex-col gap-y-6"
          >
            <CompleteProfileInput width="w-[190px]" name="name" register={register} label="نام" />
            <CompleteProfileInput width="w-[190px]"
              name="email"
              register={register}
              label="ایمیل"
            />
            <CompleteProfileInput width="w-[190px]"
              name="phoneNumber"
              register={register}
              label="شماره همراه"
            />
            <span className="flex w-full  justify-between">
              <label className="text-sm text-cyan-800 dark:text-white">
                بیوگرافی
              </label>
              <textarea placeholder='بیوگرافی' name='biography' {...register("biography")} className="text-sm dark:text-white placeholder:text-sm placeholder:opacity-50 w-[190px] rounded-md dark:border-indigo-400 dark:focus:border-indigo-400 dark:hover:border-indigo-300 bg-slate-100 p-2 hover:border hover:border-gray-200 focus:border focus:border-gray-300 transition-all dark:bg-slate-700 dark:placeholder:text-white h-[100px]"/>
            </span>
            <Button type="submit" className="bg-sky-400 text-white font-bold dark:bg-indigo-400 dark:hover:bg-indigo-600 hover:bg-sky-600">ویرایش</Button>
          </form>
        </div>
        
      )}
    </div>
  );
}

export default UserSettings;
