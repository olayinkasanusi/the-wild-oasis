import styled from "styled-components";

function SideBar() {
  const StyledSidebar = styled.aside`
    background-color: aliceblue;
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
  `;

  return <StyledSidebar>SIDEBAR</StyledSidebar>;
}

export default SideBar;
