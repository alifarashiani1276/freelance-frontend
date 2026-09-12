import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectAPi } from "../../services/projectService";
import toast from "react-hot-toast";

function useRemoveProject() {
 const queryClient =  useQueryClient()
  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectAPi,

    onSuccess: (data) => {
      console.log(data);
      toast.success("پروره  با موفقیت حذف شد.");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      })
    },

    onError: (err) => toast.error(err?.response?.data?.message) 
    ,
  });

  return {isDeleting,removeProject}
}

export default useRemoveProject;
