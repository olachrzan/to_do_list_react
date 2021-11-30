import styled, { css } from "styled-components";

export const Content = styled.p`
  margin: 0;
  padding: 30px 20px;

  ${({ last }) => last && css`
    padding-top: 0;
  `}
`;