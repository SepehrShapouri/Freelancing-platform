import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../../services/authServices";
import toast from "react-hot-toast";

export function useCompleteProfile() {
  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const completeProfileHandler = async (name, email, role) => {
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      console.log(message);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return{isPending,data,completeProfileHandler}
}
