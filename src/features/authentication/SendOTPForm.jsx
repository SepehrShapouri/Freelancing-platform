import React, { useState } from "react";
import VerifyButton from "../../UI/VerifyButton";
import TextField from "../../UI/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import Loader from "../../UI/Loader";
import toast from "react-hot-toast";

function SendOTPForm({ setStep }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const sendOTPHandler = async (e) => {
    if(phoneNumber == "") toast.error("لطفا شماره موبایل خود را وارد کنید!")
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="OTPformWrapper">
        <h3 className="text-xl font-semibold">ورود | ثبت نام</h3>
        <p className="text-l">خوش آمدید!</p>
        <form className="OTPform" onSubmit={sendOTPHandler}>
          <TextField
            label="لطفا شماره موبایل خود را وارد کنید"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={setPhoneNumber}
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
