import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";

export function useCheckOTP(){
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: checkOtp,
      });
      const checkOtpHandler = async (e,phoneNumber,otp) => {
        e.preventDefault();
        if (!otp) toast.error("لطفا کد تایید را وارد کنید");
        try {
          const data = await mutateAsync({ phoneNumber, otp });
          toast.success(data.message);
        } catch (error) {
          if (otp) toast.error(error.response.data.message);
        }
      };
      return {checkOtpHandler}
}