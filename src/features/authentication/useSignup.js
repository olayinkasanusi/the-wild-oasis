import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUp,
    onSuccess: () =>
      toast.success(
        "Account has been successfully created, please verify it on the user's email address"
      ),
    onError: () => toast.error("There was an error when creating new user"),
  });

  return { signup, isLoading };
}
