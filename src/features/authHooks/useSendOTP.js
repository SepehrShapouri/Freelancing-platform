import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authServices";

export function useSendOTP(){
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: getOtp,
      });
      const sendOTPHandler = async (e,phoneNumber,setStep) => {
        if(phoneNumber == "") toast.error("لطفا شماره موبایل خود را وارد کنید!")
        e.preventDefault();
        try {
          const data = await mutateAsync({ phoneNumber });
          setStep(2);
          toast.success(data.message)
        } catch (error) {
          toast.error(error?.response?.data?.message)
        }
        console.log(phoneNumber)
      };
      return {sendOTPHandler,isPending}
}