import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

function useCreateProject() {
  const queryClient = useQueryClient();

   const {isPending: isCreating ,mutate : createProject} =  useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
        toast.success(data?.message)
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return {isCreating,createProject}
} 

export default useCreateProject;
