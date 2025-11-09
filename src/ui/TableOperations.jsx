import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.2rem;
  }

  @media only screen and (max-width: 500px) {
    gap: 0.8rem;
  }
`;

export default TableOperations;
