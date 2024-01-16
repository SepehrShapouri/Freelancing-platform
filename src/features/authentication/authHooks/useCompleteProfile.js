import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useCompleteProfile() {
  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();
  const completeProfileHandler = async (name, email, role,gender) => {
    if(name || email ||role||gender == "") {
      toast.error("لطفا تمامی فیلد هارا پر کنید")
    }
    try {
      const { user, message } = await mutateAsync({ name, email, role,gender});
      toast.success(message);
      console.log(user)
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید میباشد", {
          icon: "❕",
        });
        return;
      }
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "owner") return navigate("owner");
    } catch (error) {
      // toast.error(error?.response?.data?.message);
    }
  };
  return { isPending, data, completeProfileHandler };
}
