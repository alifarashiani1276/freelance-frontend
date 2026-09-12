import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../services/authService";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries()
      navigate("/auth",{replace:true})
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  

  return { isPending, logout };
}

export default useLogout;
