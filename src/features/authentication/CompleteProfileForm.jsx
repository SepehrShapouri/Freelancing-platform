import React, { useState } from "react";
import AppLogo from "../../UI/AppLogo";
import { useCompleteProfile } from "./authHooks/useCompleteProfile";
import Loader from "../../UI/Loader";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { ArrowRightCircle} from "lucide-react";
function CompleteProfileForm() {
  const [role, setRole] = useState(null);
  const [fullName, setFullName] = useState({
    name: "",
    lastName: "",
  });
  const [gender, setGender] = useState(null);
  const { isPending,data, completeProfileHandler } = useCompleteProfile();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = `${fullName.name} ${fullName.lastName}`;
    completeProfileHandler(name, email, role, gender);
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center  bg-gradient-to-br from-sky-50 to-sky-100">
      <AppLogo />
      <div className="flex">
        <div className=" bg-white sm:w-[500px] w-[400px] h-[500px] transition-all shadow-sm sm:rounded-r-3xl sm:rounded-l-none rounded-3xl flex justify-center">
          <form className="w-full p-6 sm:px-16 sm:py-10 h-[500px] flex flex-col gap-y-6 justify-center">
            <CompleteProfileInput
              label="نام"
              placeholder="سپهر"
              id="name"
              onChange={(e) =>
                setFullName({ ...fullName, name: e.target.value })
              }
            />
            <CompleteProfileInput
              label="نام خوانوادگی"
              placeholder="شاپوری"
              id="lastname"
              onChange={(e) =>
                setFullName({ ...fullName, lastName: e.target.value })
              }
            />
            <GenderSelect gender={gender} setGender={setGender} />
            <CompleteProfileInput
              label="ایمیل"
              placeholder="user@example.com"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
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
              onClick={(e) => handleSubmit(e)}
              className="verifyButton w-full"
            >
              تکمیل پروفایل
            </button>
          )}
        </div>
          </form>
        </div>
        <div className="hidden sm:flex bg-white sm:w-[250px] sm:h-[500px] md:w-[350px] opacity-0 sm:opacity-100 transition-all rounded-l-3xl p-4 flex-col items-center justify-evenly border-r ">
          <img
            src="src/assets/images/7309700.jpg"
            className="w-[130px] h-[130px] rounded-full "
            alt="avatar"
          />
          <div className="flex flex-col items-center text-cyan-800">
            <h1 className="font-bold text-2xl">ساخت پروفایل</h1>
            <p className="text-xs md:text-sm mt-5">
              در کمترین زمان پروفایل کاربری خود را بسازید!
            </p>
          </div>
          <ArrowRightCircle size={30} color="#164e63" className="mt-14"/>
        </div>
      </div>
    </div>
  );
}
export default CompleteProfileForm;

function GenderSelect({ gender, setGender }) {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-cyan-800 text-sm">جنسیت</p>
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
function CompleteProfileInput({ label, id, onChange, placeholder, value }) {
  return (
    <span className="flex w-full items-center justify-between">
      <label htmlFor="name" className="text-sm text-cyan-800">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-sm placeholder:text-sm placeholder:opacity-50 w-[250px] rounded-md h-[40px] bg-slate-100 px-4 hover:border hover:border-gray-200 focus:border focus:border-gray-300 transition-all"
      />
    </span>
  );
}
function RoleSelect({ role, setRole }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-cyan-800">پوزیشن</p>
      <span className="flex  justify-between w-[250px]">
        <div className="flex items-center  w-[100px] h-[30px] justify-between p-3">
          <input
            type="radio"
            name="ROLE"
            onChange={(e)=>setRole(e.target.value)}
            id="FREELANCER"
            value="FREELANCER"
            checked={role=="FREELANCER"}
            className="form-radio  checked:text-emerald-500 focus:ring-0"
          />
          <label htmlFor="FREELANCER" className="text-sm text-cyan-800">
            فریلنسر
          </label>
        </div>
        <div className="flex items-center  w-[100px] h-[30px] justify-between p-3">
          <input
            type="radio"
            name="ROLE"
            onChange={(e)=>setRole(e.target.value)}
            id="OWNER"
            value="OWNER"
            checked={role=="OWNER"}
            className="form-radio  checked:text-sky-500 focus:ring-0"
          />
          <label htmlFor="OWNER" className="text-sm text-cyan-800">
            کارفرما
          </label>
        </div>
      </span>
    </div>
  );
}
