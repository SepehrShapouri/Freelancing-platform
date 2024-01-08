import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { checkOtp } from "../../../services/authServices";
import { useNavigate } from "react-router-dom";

export function useCheckOTP() {
  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpHandler = async (e, phoneNumber, otp) => {
    e.preventDefault();
    if (!otp) toast.error("لطفا کد تایید را وارد کنید");
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      console.log(user);
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید میباشد", {
          icon: "❕",
        });
        return;
      }
      if(user.role === "FREELANCER") return navigate("/freelancer")
      if(user.role === "OWNER") return navigate("/owner")
      // navigate("/complete-profile")
    } catch (error) {
      if (otp) toast.error(error.response.data.message);
    }
  };
  return { checkOtpHandler, isPending, data, error };
}
