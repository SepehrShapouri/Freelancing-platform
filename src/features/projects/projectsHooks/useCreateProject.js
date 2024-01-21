import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

export default function useCreateProject(){
    const queryClient = useQueryClient()
    const {data,mutateAsync:createProject,isPending:isCreating} = useMutation({
        mutationFn:createProjectApi,
        onSuccess:()=>{
            toast.success("پروژه جدید با موفقیت ایجاد شد!")
            queryClient.invalidateQueries({
                queryKey:["owner-projects"]
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message)
        }
    })
    return {createProject,isCreating}
}