import React, { useState } from "react";
import AppLogo from "../../UI/AppLogo";
import { useCompleteProfile } from "./authHooks/useCompleteProfile";
import Loader from "../../UI/Loader";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { ArrowRightCircle} from "lucide-react";
import { useForm } from "react-hook-form";
import { useThemeContext } from "../../context/ThemeContext";
function CompleteProfileForm() {
  const [role, setRole] = useState(null);
  const {register,formState:{errors},handleSubmit} = useForm()
  const [gender, setGender] = useState(null);
  const { isPending,data, completeProfileHandler } = useCompleteProfile();
  const onSubmit = ({email,name,lastname}) => {
    const fullname = `${name} ${lastname}`
    completeProfileHandler(fullname, email, role, gender);
  };
  const {isDarkMode} = useThemeContext()
  return (
    <div className="flex flex-col justify-center h-screen items-center  bg-gradient-to-br from-sky-50 to-sky-100 dark:bg-gradient-to-tr dark:from-slate-700 dark:to-slate-700 ">
      <AppLogo />
      <div className="flex">
        <div className=" bg-white sm:w-[500px] w-[400px] h-[500px] overflow-auto transition-all shadow-sm sm:rounded-r-3xl sm:rounded-l-none rounded-3xl flex justify-center dark:bg-slate-800">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6 sm:px-16 sm:py-10 h-[500px] flex flex-col gap-y-6 justify-center">
            <CompleteProfileInput
            required
              label="نام"
              placeholder="سپهر"
              name="name"
              register={register}
              errors={errors}
              validationSchema={{
                required:"نام خود را وارد کنید!",
              }}
            />
            <CompleteProfileInput
            required
              label="نام خوانوادگی"
              placeholder="شاپوری"
              name="lastname"
              register={register}
              errors={errors}
              validationSchema={{
                required:"نام خوانوادگی خود را وارد کنید!"
              }}
            />
            <GenderSelect gender={gender} setGender={setGender} />
            <CompleteProfileInput
            required
              label="ایمیل"
              placeholder="user@example.com"
              name="email"
              register={register}
              errors={errors}
              validationSchema={{
                required:"ایمیل خود را وارد کنید!"
              }}
            />
            <RoleSelect role={role} setRole={setRole}/>
            <aside className="text-sm flex items-center mt-2">
              <input type="radio" className="form-radio w-3 h-3 ml-4" />
              <p>تمامی <span className="text-sky-600">قوانین</span> را خوانده و با آن ها موافقت میکنم.</p>
            </aside>
            <div className="w-full">
          {isPending ? (
            <span className="w-full flex justify-center">
              <Loader />
            </span>
          ) : (
            <button
            type="submit"
              className="verifyButton w-full"
            >
              تکمیل پروفایل
            </button>
          )}
        </div>
          </form>
        </div>
        <div className="hidden sm:flex dark:bg-slate-800 bg-white sm:w-[250px] sm:h-[500px] md:w-[350px] opacity-0 sm:opacity-100 transition-all rounded-l-3xl p-4 flex-col items-center justify-evenly border-r dark:border-r-slate-600">
          <img
            src="src/assets/images/7309700.jpg"
            className="w-[130px] h-[130px] rounded-full "
            alt="avatar"
          />
          <div className="flex flex-col items-center text-cyan-800 dark:text-white dark:font-semibold">
            <h1 className="font-bold text-2xl">ساخت پروفایل</h1>
            <p className="text-xs md:text-sm mt-5">
              در کمترین زمان پروفایل کاربری خود را بسازید!
            </p>
          </div>
          <ArrowRightCircle size={30} color={`${isDarkMode ? "#818cf8" : "#164e63"}`} className="mt-14"/>
        </div>
      </div>
    </div>
  );
}
export default CompleteProfileForm;

function GenderSelect({ gender, setGender}) {
  return (
    <div className="flex w-full items-center justify-between">
      <label className="text-cyan-800 text-sm">جنسیت <span className="text-error">*</span></label>
      <span className="flex gap-x-12">
        <li className="list-none">
          <input
            type="radio"
            id="MALE"
            name="GENDER"
            value="MALE"
            className="hidden peer"
            checked={gender == "MALE"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            htmlFor="MALE"
            className="flex h-[20px] items-center justify-between w-[100px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
          >
            <div className="flex items-center">
              <div className="w-full text-xs font-semibold">مرد</div>
              <IoIosMale className="text-[40px]" />
            </div>
          </label>
        </li>
        <li className="list-none">
          <input
            type="radio"
            id="FEMALE"
            name="GENDER"
            value="FEMALE"
            className="hidden peer"
            checked={gender == "FEMALE"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            htmlFor="FEMALE"
            className="flex h-[20px] items-center justify-between w-[100px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  peer-checked:border-purple-400 peer-checked:text-purple-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 "
          >
            <div className="flex items-center">
              <div className="w-full text-xs font-semibold">زن</div>
              <IoIosFemale className="text-[40px]" />
            </div>
          </label>
        </li>
      </span>
    </div>
  );
}
function CompleteProfileInput({ label, name, placeholder,register,errors,required,validationSchema }) {
  return (
    <>
    <span className="flex w-full items-center justify-between">
      <label htmlFor="name" className="text-sm text-cyan-800 dark:text-white">
        {label}
        {required && <span className="text-error dark:text-rose-500">*</span>}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        {...register(name,validationSchema)}
        className="text-sm placeholder:text-sm placeholder:opacity-50 w-[250px] rounded-md h-[40px] bg-slate-100 px-4 hover:border hover:border-gray-200 focus:border focus:border-gray-300 transition-all dark:bg-slate-700 dark:placeholder:text-white"
      />
    </span>
    {errors && errors[name] && <p className="text-[12px] -my-3 text-error">{errors[name]?.message}</p>}
          </>
  );
}
function RoleSelect({ role, setRole,}) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-sm text-cyan-800 dark:text-white">پوزیشن <span className="text-error dark:text-rose-500">*</span></label>
      <span className="flex  justify-between w-[250px]">
        <RoleSelectInput value="FREELANCER" label="فریلنسر" role={role} setRole={setRole}/>
        <RoleSelectInput value="OWNER" label="کارفرما" setRole={setRole} role={role}/>
      </span>
    </div>
  );
}
export function RoleSelectInput({value,label,role,setRole}){
  return(
    <div className="flex items-center  w-[100px] h-[30px] justify-between p-3">
    <input
      type="radio"
      name="ROLE"
      onChange={(e)=>setRole(e.target.value)}
      id={value}
      value={value}
      checked={role==value}
      className="form-radio  checked:text-sky-500 focus:ring-0 dark:checked:text-indigo-400"
    />
    <label htmlFor="OWNER" className="text-sm text-cyan-800 dark:text-white">
{label}
    </label>
  </div>
  )
}