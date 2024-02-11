import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../../services/projectServices";

export function useAllProjects(){
    const {data:allProjects,isLoading} = useQuery({
        queryKey:['all-projects'],
        queryFn:getAllProjects
    })
    const {projects} = allProjects || {}
    return { projects,isLoading}
}