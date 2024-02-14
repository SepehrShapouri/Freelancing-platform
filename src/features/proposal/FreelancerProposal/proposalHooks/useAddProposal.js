import { useMutation } from "@tanstack/react-query";
import { addProposalApi } from "../../../../services/proposalServices";
import toast from "react-hot-toast";

export function useAddProposal(){
    const {data,isPending:isCreating,mutateAsync:createProposal} = useMutation({
        mutationFn:addProposalApi,
        onSuccess:(data)=>{
            toast.success(data.message)
        },
        onError:(error)=>{
            toast.error(error?.response?.data?.message)
        }
    })
    return {data,isCreating,createProposal}
}