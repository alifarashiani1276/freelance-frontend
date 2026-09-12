import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createFeedbackApi } from "../../services/feedbackService";

function useCreateFeedback() {
  const { mutate: sendFeedback, isPending: isSending } = useMutation({
    mutationFn: createFeedbackApi,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { sendFeedback, isSending };
}

export default useCreateFeedback;