import React from "react";
import VerifyButton from "../../UI/VerifyButton";
import TextField from "../../UI/TextField";
import Loader from "../../UI/Loader";
import { useSendOTP } from "./authHooks/useSendOTP";

function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const { isPending,sendOTP} = useSendOTP(setStep);
  return (
    <div className="container flex flex-col items-center">
      <div className="OTPformWrapper">
        <h3 className="text-xl font-semibold">ورود | ثبت نام</h3>
        <p className="text-l">خوش آمدید!</p>
        <form
          className="OTPform"
        onSubmit={(e) => {sendOTP({phoneNumber},{onSuccess:()=>setStep(2)}),e.preventDefault()}}
        >
          <TextField
            label="لطفا شماره موبایل خود را وارد کنید"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
          <div>
            {isPending ? (
              <Loader />
            ) : (
              <VerifyButton text="ارسال کد تایید" width="w-80" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;
