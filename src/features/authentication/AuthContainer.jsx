import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "../CheckOTPForm";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  function renderStep() {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber} setStep={setStep} />;
      default:
        return null;
    }
  }
  return <div>{renderStep()}</div>;
}

export default AuthContainer;
