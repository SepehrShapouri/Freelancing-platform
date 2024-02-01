import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogoutApi } from "../../../services/authServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUserLogout(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {mutateAsync:userLogout,isPending:isLoggingOut} = useMutation({
        mutationFn:userLogoutApi,
        onSuccess:(data)=>{
            toast.success("شما با موفقیت از حساب کاربری خود خارج شدید")
            queryClient.removeQueries()
            navigate("/")
        },
        onError:(err)=>{
            console.log(err)
        }
    })
    return {userLogout,isLoggingOut}
}