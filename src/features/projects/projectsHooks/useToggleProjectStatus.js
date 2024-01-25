import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggelProjectStatusApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

export default function useToggleProjectStatus(){
    const queryClient = useQueryClient()
    const {isPending:isToggling,mutateAsync:toggleProjectStatus} = useMutation({
        mutationFn:toggelProjectStatusApi,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['owner-projects']})
            toast.success(data.message)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message);
          },
    })
    return {toggleProjectStatus,isToggling}
}