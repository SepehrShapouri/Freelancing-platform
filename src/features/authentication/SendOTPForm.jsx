import React, { useState } from "react";
import VerifyButton from "../../UI/VerifyButton";
import TextField from "../../UI/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="container">
      <div className="OTPformWrapper">
        <h3 className="text-xl font-semibold">ورود | ثبت نام</h3>
        <p className="text-l">خوش آمدید!</p>
        <form className="OTPform">
          <TextField
            label="لطفا شماره موبایل خود را وارد کنید"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <VerifyButton text="ارسال کد تایید" width="w-80" />
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;
