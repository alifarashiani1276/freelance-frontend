import { useQuery } from "@tanstack/react-query";
import { getMyFeedbacksApi } from "../../services/feedbackService";

function useMyFeedbacks() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["my-feedbacks"],
    queryFn: getMyFeedbacksApi,
    retry: false,
  });

  const { feedbacks } = data || {};

  return { isLoading, feedbacks, isError };
}

export default useMyFeedbacks;
