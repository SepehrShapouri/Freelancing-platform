import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { checkOtp } from "../../../services/authServices";
import { useNavigate } from "react-router-dom";

export function useCheckOTP(){
  const navigate = useNavigate()
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: checkOtp,
      });
      const checkOtpHandler = async (e,phoneNumber,otp) => {
        e.preventDefault();
        if (!otp) toast.error("لطفا کد تایید را وارد کنید");
        try {
          const data = await mutateAsync({ phoneNumber, otp });
          toast.success(data.message);
          navigate("/complete-profile")
          console.log(`1`)
        } catch (error) {
          if (otp) toast.error(error.response.data.message);
        }
      };
      return {checkOtpHandler,isPending,data,error}
}