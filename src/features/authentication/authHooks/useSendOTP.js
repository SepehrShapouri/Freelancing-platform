import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../../services/authServices";

export function useSendOTP() {
  const {
    isPending,
    error,
    data,
    mutateAsync: sendOTP,
  } = useMutation({
    mutationFn: getOtp,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error("شماره موبایل خود را وارد کنید")
    },
  });
  return { isPending, data, error, sendOTP };
}
