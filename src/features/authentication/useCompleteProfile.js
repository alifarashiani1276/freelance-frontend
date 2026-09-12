import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";

export default function useCompleteProfile() {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  return { isCompleting: isPending, completeProfileAsync: mutateAsync };
}