import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;

      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 20px;
      font-weight: 600;

      @media only screen and (max-width: 768px) {
        font-size: 12px;
      }
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;

      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    `}
`;

export default Heading;
