import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { createProposalApi } from "../../services/proposalService";

function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: creatProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, creatProposal };
}

export default useCreateProposal;
