import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteFxn, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success(`Booking has been successfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Error deleting Booking"),
  });

  return { deleteFxn, isDeleting };
}
