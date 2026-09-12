import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authService";

function useUsers() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
    retry: false,
  });

  const { users } = data || {};
  console.log(users);

  return { isLoading, users, isError };
}

export default useUsers;
