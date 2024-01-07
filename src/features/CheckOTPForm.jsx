import React, { useEffect, useState } from "react";
import VerifyButton from "../UI/VerifyButton";
import OTPInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "../services/authServices";
import toast from "react-hot-toast";
import { IoMdArrowRoundBack } from "react-icons/io";
function CheckOTPForm({ phoneNumber, setStep }) {
  const [otp, setOtp] = useState();
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    if(!otp) toast.error("لطفا کد تایید را وارد کنید")
    try {
      const data = await mutateAsync({ phoneNumber, otp });
      toast.success(data.message);
    } catch (error) {
        toast.error(error.response.data.message)
    }
  };
  const mutateResendOTP = useMutation({
    mutationFn: getOtp,
  });
  const resendOTP = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateResendOTP.mutateAsync({ phoneNumber });
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setMinutes(1);
    setSeconds(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <div className="container">
      <div className="OTPformWrapper otpformwrapper">
        <h3 className="text-xl font-semibold flex w-full justify-between">
          ورود | ثبت نام
          <button className="text-cyan-900" onClick={() => setStep(1)}>
            <IoMdArrowRoundBack fontSize={"22px"} />
          </button>
        </h3>
        <form className="OTPform" onSubmit={checkOtpHandler}>
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
          <div>
            <button
              className="text-sm mt-1 w-full flex"
              disabled={seconds > 0 || minutes > 0}
              onClick={(e) => resendOTP(e)}
            >
              {seconds > 0 || minutes > 0 ? (
                <span className="flex text-gray-400">
                  ارسال مجدد کد تا
                  {
                    <p className="px-1">
                      {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  }
                  ثانیه دیگر
                </span>
              ) : (
                <p className="text-cyan-600 hover:text-cyan-800">
                  ارسال مجدد کد تایید
                </p>
              )}
            </button>
          </div>
          <span>
            <VerifyButton text="تایید" width="w-80" marginTop="mt-1" />
          </span>
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
