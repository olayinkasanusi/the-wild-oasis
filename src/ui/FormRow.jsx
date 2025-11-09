/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
    width: 90%;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 0.8rem 0;

    &:has(button) {
      justify-content: space-around;
      gap: 1rem;
      padding: 1rem 0;
    }
  }

  @media only screen and (max-width: 500px) {
    &:has(button) {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
