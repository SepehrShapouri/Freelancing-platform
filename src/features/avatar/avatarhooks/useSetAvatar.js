import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setAvatr } from "../../../services/authServices";
import toast from "react-hot-toast";

export default function useSetAvatar() {
  const queryClient = useQueryClient()
  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: setAvatr,
    onSuccess:()=>{
      queryClient.invalidateQueries()
    }
  });
  const setAvatarHandler = async (userAvatarUrl) => {
    try {
      const data = await mutateAsync({ userAvatarUrl });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return { setAvatarHandler, isPending, data, error };
}
