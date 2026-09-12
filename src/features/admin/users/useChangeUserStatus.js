import { useMutation } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";


function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeUserStatus,isError } = useMutation({
    mutationFn: changeUserStatusApi ,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeUserStatus,isError };
}

export default useChangeUserStatus;
