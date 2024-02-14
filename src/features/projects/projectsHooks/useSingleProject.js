import { useQuery } from "@tanstack/react-query";
import { getProjectByidApi } from "../../../services/projectServices";

export default function useSingleProject(id){
    const {data,isLoading,error} = useQuery({
        queryFn:()=>getProjectByidApi(id),
        queryKey:['single-project'],
        retry:false
    })
    const {project} = data || {}
    return {project,isLoading,error}
}