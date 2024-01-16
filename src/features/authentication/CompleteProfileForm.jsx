import React, { useState } from "react";
import AppLogo from "../../UI/AppLogo";
import TextField from "../../UI/TextField";
import VerifyButton from "../../UI/VerifyButton";
import { Avatar, Switch } from "@mui/material";
import RadioInput from "../../UI/RadioInput";
import { useCompleteProfile } from "./authHooks/useCompleteProfile";
import Loader from "../../UI/Loader";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { ArrowRightCircle, MoveRight, User } from "lucide-react";
import { RxAvatar } from "react-icons/rx";
function CompleteProfileForm() {
  const [role, setRole] = useState(null);
  const [fullName, setFullName] = useState({
    name: "",
    lastName: "",
  });
  const [gender, setGender] = useState(null);
  const { isPending, data, completeProfileHandler } = useCompleteProfile();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = `${fullName.name} ${fullName.lastName}`;
    completeProfileHandler(name, email, role, gender);
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center  bg-gradient-to-br from-sky-50 to-sky-100">
      <AppLogo />
      {/* <div className="OTPformWrapper flex flex-col w-[350px] sm:w-[700px] sm:items-center transition-all ease-in ">
        <h3 className="text-xl font-semibold">خوش امدید!</h3>
        <p className="text-l">لطفا اطلاعات کاربری خود را تکمیل کنید</p>
        <form className="OTPform complete-profile-form self-center sm:w-full sm:flex-row">
          <div className="">
            <span className="complete-profile-input">
              <TextField
                label="نام"
                name="name"
                value={fullName.name}
                onChange={(e) =>
                  setFullName({ ...fullName, name: e.target.value })
                }
              />
            </span>
            <span className="complete-profile-input">
              <TextField
                label="نام خانوادگی"
                name="lastname"
                value={fullName.lastName}
                onChange={(e) =>
                  setFullName({ ...fullName, lastName: e.target.value })
                }
              />
            </span>
            <span className="complete-profile-input">
              <TextField
                label="ایمیل"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
          </div>
          <div className=" sm:w-[50%] w-full flex flex-col">
            <RoleSelect role={role} setRole={setRole}/>
            <GenderSelect gender={gender} setGender={setGender}/>
          </div>
        </form>
        <div className="w-full ">
          {isPending ? (
            <Loader />
          ) : (
            <button
              onClick={(e) => handleSubmit(e)}
              className="verifyButton w-full"
            >
              تکمیل پروفایل
            </button>
          )}
        </div>
      </div> */}
      <div className="flex">
        <div className=" bg-white sm:w-[500px] w-[400px] h-[600px] transition-all shadow-sm sm:rounded-r-3xl sm:rounded-l-none rounded-3xl flex justify-center ">
          <form action="" className="w-full p-6 h-full sm:px-16 sm:py-10">
            <CompleteProfileInput label="name"/>
            <CompleteProfileInput label="lastname"/>
            <GenderSelect/>
          </form>
        </div>
        <div className="hidden sm:flex bg-white sm:w-[250px] sm:h-[600px] md:w-[350px] opacity-0 sm:opacity-100 transition-all rounded-l-3xl p-4 flex-col items-center justify-evenly border-r ">
          <img src="src/assets/images/7309700.jpg"  className="w-[130px] h-[130px] rounded-full " alt="avatar"/>
          <div className="flex flex-col items-center text-cyan-800">
            <h1 className="font-bold text-2xl">ساخت پروفایل</h1>
            <p className="text-xs md:text-sm mt-5">در کمترین زمان پروفایل کاربری خود را بسازید!</p>
          </div>
          <ArrowRightCircle size={30} color="#164e63"/>
        </div>
      </div>
    </div>
  );
}

export default CompleteProfileForm;

// export function GenderSelect({ gender, setGender }) {
//   return (
//     <div className="flex w-full justify-evenly sm:mb-8 my-8">
//       <span className="bg-gradient-to-bl from-sky-400 to-sky-500 w-[120px] h-[120px] rounded-2xl shadow-md flex p-2">
//         <RadioInput
//         label="مرد"
//           name="GENDER"
//           id="MALE"
//           onChange={(e) => setGender(e.target.value)}
//           value="MALE"
//           checked={gender == "MALE"}
//           extraClasses="text-white"
//         />
//         <IoIosMale className="text-white text-[200px] relative bottom-10 left-5"/>
//       </span>
//       <span className="bg-gradient-to-bl from-fuchsia-300 to-fuchsia-400 w-[120px] h-[120px] rounded-2xl shadow-md flex p-2">
//         <RadioInput
//         extraClasses="text-white"
//         label="زن"
//           name="GENDER"
//           id="FEMAIL"
//           onChange={(e) => setGender(e.target.value)}
//           value="FEMALE"
//           checked={gender == "FEMALE"}
//         />
//         <IoIosFemale className="text-white text-[200px] relative bottom-10 left-5"/>
//       </span>
//     </div>
//   );
// }

// export function RoleSelect({ role, setRole }) {
//   return <div className="flex w-full justify-evenly">
//     <span className="bg-gray-100 w-[120px] h-[30px] rounded-lg flex p-2 items-center justify-between">
//       <RadioInput
//         name="ROLE"
//         id="OWNER"
//         onChange={(e) => setRole(e.target.value)}
//         value="OWNER"
//         checked={role == "OWNER"}
//       />
//       <span>|</span>
//       <p className="text-[10px] text-cyan-900 mr-4">کارفرما</p>
//       <MdOutlineRecordVoiceOver className="text-cyan-700 text-lg mr-4" />
//     </span>
//     <span className="bg-gray-100 w-[120px] h-[30px] rounded-lg flex p-2 items-center justify-between">
//       <RadioInput
//         name="ROLE"
//         id="FREELANCER"
//         onChange={(e) => setRole(e.target.value)}
//         value="FREELANCER"
//         checked={role == "FREELANCER"}
//       />
//       <span>|</span>
//       <p className="text-[10px] text-cyan-900 mr-4">فریلنسر</p>
//       <FaCode className="text-cyan-700 mr-4" />
//     </span>
//   </div>;
// }
function GenderSelect({gender,setGender}){
return(
  <div className="flex w-full items-center justify-between">
  <p className="text-cyan-800 text-sm">جنسیت</p>
  <span className="flex gap-x-6">
        <li className="list-none">
        <input type="radio" id="male" name="gender" value="male" class="hidden peer"/>
        <label for="male" class="flex h-[20px] items-center justify-between w-[100px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ">                           
            <div class="flex items-center">
                <div class="w-full text-xs font-semibold">مرد</div>
                <IoIosMale className="text-[40px]"/>
            </div>
        </label>
    </li>
    <li className="list-none">
        <input type="radio" id="female" name="gender" value="female" class="hidden peer" />
        <label for="female" class="flex h-[20px] items-center justify-between w-[100px] p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  peer-checked:border-purple-400 peer-checked:text-purple-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 ">                           
            <div class="flex items-center">
                <div class="w-full text-xs font-semibold">زن</div>
                <IoIosFemale className="text-[40px]"/>
            </div>
        </label>
    </li>
  </span>
  </div>
  
)
}
function CompleteProfileInput({label,id,onChange}){
  return(
    <span className="flex w-full items-center justify-between" >
      <label htmlFor="name" className="text-sm text-cyan-800">{label}</label>
      <input type="text" name="name" id="name" className="w-[250px] rounded-md h-[40px] bg-slate-100 px-4 hover:border hover:border-gray-200 focus:border focus:border-gray-300 transition-all"/>
    </span>
  )
}