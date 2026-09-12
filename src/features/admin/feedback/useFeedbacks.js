import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacksApi } from "../../../services/feedbackService";

function useFeedbacks() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["admin-feedbacks"],
    queryFn: () => getAllFeedbacksApi(),
    retry: false,
  });

  const { feedbacks, total } = data || {};

  return { isLoading, feedbacks, total, isError };
}

export default useFeedbacks;
