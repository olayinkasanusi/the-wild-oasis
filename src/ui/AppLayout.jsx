import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;

  @media only screen and (max-width: 1240px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 2.8rem 6.4rem;
  overflow: scroll;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0.5rem 3.2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (max-width: 1200px) {
    max-width: 100%;
    padding: 0 2rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
