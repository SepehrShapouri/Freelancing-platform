import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/authServices";

export default function useUser() {
  const { data, isLoading,error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  const { user } =  data || {}
  console.log(user)
  return { isLoading, user };
}
