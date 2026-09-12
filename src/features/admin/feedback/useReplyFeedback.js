import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { replyFeedbackApi } from "../../../services/feedbackService";

function useReplyFeedback() {
  const {
    mutate: replyFeedback,
    isPending: isReplying,
    isError,
  } = useMutation({
    mutationFn: replyFeedbackApi,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { replyFeedback, isReplying, isError };
}

export default useReplyFeedback;
