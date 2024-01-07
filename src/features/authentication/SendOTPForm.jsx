import React, { useState } from "react";
import VerifyButton from "../../UI/VerifyButton";
import TextField from "../../UI/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import Loader from "../../UI/Loader";
import toast from "react-hot-toast";
import { useSendOTP } from "../authHooks/useSendOTP";

function SendOTPForm({ setStep,phoneNumber,onChange}) {
const {isPending,sendOTPHandler} = useSendOTP()
  return (
    <div className="container">
      <div className="OTPformWrapper">
        <h3 className="text-xl font-semibold">ورود | ثبت نام</h3>
        <p className="text-l">خوش آمدید!</p>
        <form className="OTPform" onSubmit={(e)=>sendOTPHandler(e,phoneNumber,setStep)}>
          <TextField
            label="لطفا شماره موبایل خود را وارد کنید"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
          />
          <div>
            {isPending ? (
              <Loader/>
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
