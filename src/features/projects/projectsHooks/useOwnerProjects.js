import { useQuery } from "@tanstack/react-query"
import getOwnerProjectsApi from "../../../services/projectServices"

export default function useOwnerProjects(){
    const {data,isLoading} = useQuery({
        queryKey :["owner-projects"],
        queryFn:getOwnerProjectsApi,
        retry:false
     })
     const {projects} = data || {}
     return {projects,isLoading}
}