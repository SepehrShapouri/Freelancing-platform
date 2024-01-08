import React, { useState } from "react";
import AppLogo from "../../UI/AppLogo";
import TextField from "../../UI/TextField";
import VerifyButton from "../../UI/VerifyButton";
import { Switch } from "@mui/material";
import RadioInput from "../../UI/RadioInput";

function CompleteProfileForm() {
  const [role, setRole] = useState(null);
  const [fullName,setFullName] = useState({
    name:"",
    lastName:""
  })
  const [email,setEmail]= useState("")
  const handleSubmit =(e)=>{
e.preventDefault()
console.log(role)
console.log(fullName)
console.log(email)
  }
  return (
    <div className="container flex flex-col items-center">
      <AppLogo />
      <div className="OTPformWrapper flex flex-col">
        <h3 className="text-xl font-semibold">خوش امدید!</h3>
        <p className="text-l">لطفا اطلاعات کاربری خود را تکمیل کنید</p>
        <form className="OTPform complete-profile-form self-center" onSubmit={(e)=>handleSubmit(e)}>
          <span className="complete-profile-input">
            <TextField label="نام" name="name" value={fullName.name} onChange={(e)=>setFullName({...fullName,name:e.target.value})}/>
          </span>
          <span className="complete-profile-input">
            <TextField label="نام خانوادگی" name="lastname" value={fullName.lastName} onChange={(e)=>setFullName({...fullName,lastName:e.target.value})} />
          </span>
          <span className="complete-profile-input">
            <TextField label="ایمیل" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </span>
          <div className="flex w-full justify-evenly">
            <RadioInput
              label="کارفرما"
              name="ROLE"
              id="OWNER"
              onChange={(e) => setRole(e.target.value)}
              value="OWNER"
              checked={role == "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              name="ROLE"
              id="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              value="FREELANCER"
              checked={role == "FREELANCER"}
            />
          </div>
          <VerifyButton text="تکمیل پروفایل" width="w-full" />
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
