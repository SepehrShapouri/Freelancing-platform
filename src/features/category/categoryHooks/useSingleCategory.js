import { useQuery } from "@tanstack/react-query";
import { getCategoryByIdApi } from "../../../services/categoryServices";

export default function useSingleCategory(id){
    const {data,isLoading} = useQuery({
        queryKey:['category'],
        queryFn:()=>getCategoryByIdApi(id),
        retry:false
    })
    const {category} = data || {}
    return {category,isLoading}
}