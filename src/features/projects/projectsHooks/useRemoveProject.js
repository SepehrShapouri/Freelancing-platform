import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutateAsync: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return {removeProject,isDeleting}
}
