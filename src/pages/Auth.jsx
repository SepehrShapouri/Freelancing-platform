import React, { useEffect } from "react";
import SendOTPForm from "../features/authentication/SendOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import { getOtp } from "../services/authServices";
import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="container">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
