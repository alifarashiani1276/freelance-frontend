import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "../../services/authService";

function useUser() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  const { user } = data || {};

  return { isLoading, user, isError };
}

export default useUser;
