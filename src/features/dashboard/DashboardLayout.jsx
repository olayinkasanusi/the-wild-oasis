import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media only screen and (max-width: 1200px) {
    /* The key change: Switching to 2 columns */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto; /* More auto rows for stacking */
    gap: 1.6rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 1.2rem;
  }
`;
function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();

  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabinsCount={cabins.length}
        numDays={numDays}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
