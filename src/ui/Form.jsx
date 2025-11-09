import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media only screen and (max-width: 768px) {
        padding: 1.6rem 2.4rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      max-width: 80rem;
      width: 90vw;
      min-width: 300px;

      @media only screen and (max-width: 768px) {
        padding: 1.6rem 1.2rem;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;
Form.defaultProps = {
  type: "regular",
};

export default Form;
