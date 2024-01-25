import { useQuery } from "@tanstack/react-query";
import { getAllProposalApi } from "../../../services/proposalServices";

export default function useProposalList(){
  const {isLoading,data}  = useQuery({
        queryFn:getAllProposalApi,
        queryKey:['all-proposal'],
        retry:false
    })
    const {proposals} = data || {}
    return {isLoading,proposals}
}