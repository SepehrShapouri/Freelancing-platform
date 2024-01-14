import React, { useState } from "react";
import VerifyButton from "../../UI/VerifyButton";
import OTPInput from "react-otp-input";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSendOTP } from "./authHooks/useSendOTP";
import { useCheckOTP } from "./authHooks/useCheckOTP";
import OTPCoundown from "../../UI/OTPCoundown";
import AppLogo from "../../UI/AppLogo";
import Loader from "../../UI/Loader";
function CheckOTPForm({ phoneNumber, setStep }) {
  const [otp, setOtp] = useState();
  const { checkOtpHandler, isPending, data } = useCheckOTP();
  const { sendOTPHandler } = useSendOTP();
  const resendOTP = async (e) => {
    sendOTPHandler(e, phoneNumber, setStep);
    setOtp("")
  };
  return (
    <div className="container flex flex-col items-center">
      <div className="OTPformWrapper otpformwrapper">
        <h3 className="text-xl font-semibold flex w-full justify-between">
          ورود | ثبت نام
          <button className="text-cyan-900" onClick={() => setStep(1)}>
            <IoMdArrowRoundBack fontSize={"22px"} />
          </button>
        </h3>
        <form
          className="OTPform"
          onSubmit={(e) => checkOtpHandler(e, phoneNumber, otp)}
          name="checkOTPForm"
        >
          <label className="self-start">
            کد ارسال شده به شماره {phoneNumber} وارد کنید.
            <span
              className="text-sm opacity-50 cursor-pointer hover:text-rose-400 hover:opacity-100"
              onClick={() => setStep(1)}
            >
              ویرایش؟
            </span>
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
          <OTPCoundown resendOTP={resendOTP} />
          <div>
            {isPending ? (
              <Loader />
            ) : (
              <VerifyButton text=" تایید" width="w-80" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
