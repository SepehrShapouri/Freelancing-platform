import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserApi } from "../../../services/authServices";
import toast from "react-hot-toast";

export function useUpdateProfle(){
    const queryClient = useQueryClient()
    const {mutateAsync:updateProfile,isPending,error,data} = useMutation({
        mutationFn:updateUserApi,
        onSuccess:(data)=>{
            toast.success(data.message)
            queryClient.invalidateQueries(['user'])
        },
        onError:(error)=>{
            toast.error(error?.repsonse?.data?.message)
        }
    })
    return {updateProfile,isPending}
}