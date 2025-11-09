/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  @media only screen and (max-width: 768px) {
    padding: 0.8rem 0;
  }
`;

const Label = styled.label`
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
