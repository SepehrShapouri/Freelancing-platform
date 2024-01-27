import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProposalApi } from "../../../services/proposalServices";
import toast from "react-hot-toast";

export default function useToggleProposal() {
  const { mutateAsync: toggleProposalStatus, isPending: isToggling } =
    useMutation({
      mutationFn: toggleProposalApi,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });
  return { toggleProposalStatus, isToggling };
}
