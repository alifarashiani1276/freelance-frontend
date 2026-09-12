import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/authService";

function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: editProfile, isPending: isUpdating } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("اطلاعات پروفایل با موفقیت ذخیره شد");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { editProfile, isUpdating };
}

export default useUpdateProfile;