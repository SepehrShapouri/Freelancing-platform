import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../../services/projectServices";
import toast from "react-hot-toast";

export default function useEditProject(){
    const queryClient = useQueryClient()
    const {isPending:isEditting,mutateAsync:editProject} = useMutation({
        mutationFn:editProjectApi,
        onSuccess:()=>{
            toast.success("پروژه با موفقیت ویرایش شد")
            queryClient.invalidateQueries({
                queryKey:["owner-projects"]
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message)
        }
    })
    return {isEditting,editProject}
}