import React, { useState } from "react";
import AppLogo from "../../UI/AppLogo";
import TextField from "../../UI/TextField";
import VerifyButton from "../../UI/VerifyButton";
import { Switch } from "@mui/material";
import RadioInput from "../../UI/RadioInput";
import { useCompleteProfile } from "./authHooks/useCompleteProfile";
import Loader from "../../UI/Loader";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { FaCode } from "react-icons/fa";
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
    <div className="flex flex-col justify-center h-screen items-center bg-gradient-to-br from-sky-50 to-slate-50">
      <AppLogo />
      <div className="OTPformWrapper flex flex-col w-[350px] sm:w-[700px] sm:items-center transition-all ease-in ">
        <h3 className="text-xl font-semibold">خوش امدید!</h3>
        <p className="text-l">لطفا اطلاعات کاربری خود را تکمیل کنید</p>
        <form
          className="OTPform complete-profile-form self-center sm:w-full sm:flex-row"
        >
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
          <div className=" sm:w-[50%] h-[100px] sm:h-full w-full flex flex-col justify-evenly">
            <div className="flex w-full justify-evenly">
            <span className="bg-gray-100 w-[120px] h-[30px] rounded-lg flex p-2 items-center justify-between">
              <RadioInput
                name="ROLE"
                id="OWNER"
                onChange={(e) => setRole(e.target.value)}
                value="OWNER"
                checked={role == "OWNER"}
              />
                              <span>|</span>
                <p className="text-[10px] text-cyan-900 mr-4">کارفرما</p>
                <MdOutlineRecordVoiceOver className="text-cyan-700 text-lg mr-4" />
              </span>
              <span className="bg-gray-100 w-[120px] h-[30px] rounded-lg flex p-2 items-center justify-between">
              <RadioInput
                name="ROLE"
                id="FREELANCER"
                onChange={(e) => setRole(e.target.value)}
                value="FREELANCER"
                checked={role == "FREELANCER"}
              />
                              <span>|</span>
                <p className="text-[10px] text-cyan-900 mr-4">فریلنسر</p>
                <FaCode className="text-cyan-700 mr-4" />
              </span>
            </div>
            <div className="flex w-full justify-evenly sm:mb-8 mb-4">
              <span className="bg-gradient-to-bl from-cyan-50 to-slate-50 w-[120px] h-[30px] rounded-lg flex p-2 items-center">
                <RadioInput
                  name="GENDER"
                  id="MALE"
                  onChange={(e) => setGender(e.target.value)}
                  value="MALE"
                  checked={gender == "MALE"}
                />
                <span>|</span>
                <p className="text-xs text-cyan-900 mr-4">مرد</p>
                <IoIosMale className="text-sky-400 text-lg mr-4" />
              </span>
              <span className="bg-gradient-to-bl from-pink-50 to-slate-50 w-[120px] h-[30px] rounded-lg flex p-2 items-center">
                <RadioInput
                  name="GENDER"
                  id="FEMAIL"
                  onChange={(e) => setGender(e.target.value)}
                  value="FEMALE"
                  checked={gender == "FEMALE"}
                />
                <span>|</span>
                <p className="text-xs text-cyan-900 mr-4">زن</p>
                <IoIosFemale className="text-pink-400 text-lg mr-4" />
              </span>
            </div>
          </div>
        </form>
        <div className="w-full ">
          {isPending ? (
            <Loader />
          ) : (
          <button onClick={(e)=>handleSubmit(e)} className="verifyButton w-full">تکمیل پروفایل</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
