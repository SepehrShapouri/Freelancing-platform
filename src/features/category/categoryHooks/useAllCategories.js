import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesApi } from "../../../services/categoryServices";

export default function useAllCategories(){
  const{data,isLoading} =   useQuery({
        queryFn:getAllCategoriesApi,
        queryKey:["categories"],
        retry:false
    })
    const {categories} = data || {}
    return {categories,isLoading}
}