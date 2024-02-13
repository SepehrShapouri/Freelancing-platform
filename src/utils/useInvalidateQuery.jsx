import { useQueryClient } from "@tanstack/react-query";

export function useInvalidateQuery(){
    const queryClient = useQueryClient()
    function invalidateQuery(query){
        return queryClient.invalidateQueries([query])
    }
    return invalidateQuery
}