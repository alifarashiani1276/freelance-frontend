import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";

function useChangeProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isChangingStatus, mutate: changeStatus } = useMutation({
    mutationFn: ({ id, status }) => changeProjectStatusApi(id, status),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isChangingStatus, changeStatus };
}

export default useChangeProjectStatus;