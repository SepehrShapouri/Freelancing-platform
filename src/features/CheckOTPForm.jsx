import React, { useState } from "react";
import VerifyButton from "../UI/VerifyButton";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const phoneNumber = "09907270226";
  const [otp, setOtp] = useState();
  return (
    <div className="container">
      <div className="OTPformWrapper">
        <h3 className="text-xl font-semibold">ورود | ثبت نام</h3>
        <form className="OTPform">
          <label className="self-start">
            کد ارسال شده به شماره {phoneNumber} وارد کنید
          </label>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
            containerStyle="flex flex-row-reverse gap-x-2 justify-center"
            inputStyle={{
              width: "2.5rem",
              padding: "0.5rem 0.2rem",
              borderRadius: "10px",
              border: "1px solid rgb(var(--color-primary-100))",
            }}
          />
          <VerifyButton text="تایید" width="w-80" />
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
