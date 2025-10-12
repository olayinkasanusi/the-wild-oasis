import styled from "styled-components";

const StylesHeader = styled.header`
  background-color: orangered;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StylesHeader>HEADER</StylesHeader>;
}

export default Header;
