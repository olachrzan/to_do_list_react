import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 8px;
  border: 2px solid #ddd;

  ${({ shorter }) => shorter && css`
    flex-grow: 1;
    margin-right: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      margin: 0 0 10px 0;
    }
  `};
`;