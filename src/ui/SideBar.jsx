import styled, { css } from "styled-components";

import Logo from "../../public/Logo";
import MainNav from "./MainNav";
import { useState } from "react";
// import Uploader from "../data/Uploader";

// const StyledSidebar = styled.aside`
//   background-color: var(--color-grey-0);
//   padding: 3.2rem 2.4rem;
//   border-right: 1px solid var(--color-grey-100);

//   grid-row: 1/-1;

//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (max-width: 1240px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 28rem;
    z-index: 900;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
    ${(props) =>
      props.isOpen &&
      css`
        transform: translateX(0);
      `}
  }
`;

const HamburgerButton = styled.button`
  display: none;
  @media only screen and (max-width: 1240px) {
    display: block;
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 990;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1rem;

    &::before,
    &::after {
      content: "";
      display: block;
      width: 2.5rem;
      height: 0.2rem;
      background-color: var(--color-grey-800);
      margin: 0.6rem 0;
      transition: all 0.3s ease-in-out;
    }

    ${(props) =>
      props.isOpen &&
      css`
        &::before {
          transform: translateY(0.8rem) rotate(45deg);
        }
        &::after {
          transform: translateY(-0.8rem) rotate(-45deg);
        }
        & + div {
          /* Target the StyledSidebar when open */
          transform: translateX(0);
        }
      `}
  }
`;

const Overlay = styled.div`
  display: none;
  @media only screen and (max-width: 1240px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 800;
  }
`;
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={toggleSidebar} />
      <StyledSidebar isOpen={isOpen}>
        <Logo />
        <MainNav toggleSidebar={toggleSidebar} />
        {/* <Uploader /> */}
      </StyledSidebar>
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
    </>
  );
}

export default SideBar;

// import styled, { css } from 'styled-components';
// import { useState } from 'react';

// function Sidebar({ children }) {

//   return (
//     <>
//       <HamburgerButton $isOpen={isOpen} onClick={toggleSidebar} />
//       <StyledSidebar $isOpen={isOpen}>
//         {children}
//       </StyledSidebar>
//       <Overlay $isOpen={isOpen} onClick={toggleSidebar} />
//     </>
//   );
// }

// // export default Sidebar;
