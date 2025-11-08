import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginUser } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: login, isLoading: loggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
      toast.success(`User successfully logged in`);
    },
    onError: () => {
      toast.error("Invalid Login Credentials");
    },
  });

  return { login, loggingIn };
}
