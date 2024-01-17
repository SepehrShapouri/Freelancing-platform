import React, { useEffect } from "react";
import AuthContainer from "../features/authentication/AuthContainer";
import AppLogo from "../UI/AppLogo";

function Auth() {
  return (
    <div className=" xl:max-w-screen-2xl flex flex-col h-screen justify-center items-center  bg-gradient-to-tl from-sky-50 to-sky-100">
      <AppLogo/>
      <div className="mb-10 mt-5">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
