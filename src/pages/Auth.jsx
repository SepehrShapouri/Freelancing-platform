import React, { useEffect } from "react";
import SendOTPForm from "../features/authentication/SendOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import { getOtp } from "../services/authServices";
import AuthContainer from "../features/authentication/AuthContainer";
import AppLogo from "../UI/AppLogo";

function Auth() {
  return (
    <div className=" xl:max-w-screen-2xl flex flex-col h-screen justify-center items-center  bg-gradient-to-tl from-white to-sky-100">
      <AppLogo/>
      <div className=" mb-20 flex flex-row-reverse md:h-[500px] md:w-[700px] justify-between items-center transition-all ease-in">
        <span className="hidden md:flex relative mr-2">
          <img
            className="rounded-3xl w-[200px] relative top-[120px] left-[-25px]"
            src="src/assets/images/3d-rendering-cartoon-house.jpg"
            alt=""
          />
          <img className="rounded-3xl w-[180px] relative right-[40px]" src="src/assets/images/3d-programmer-male-character-code-600nw-2269273793.webp" alt="" />
          <img className="rounded-3xl w-[190px] object-cover relative bottom-[90px] left-[370px] " src="src/assets/images/cartoon-beard-handsome-character-casual-600nw-2174922633.webp" alt="" />
        </span>
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
