import styled, { css } from "styled-components";

export const Content = styled.p`
  margin: 0;
  padding: 30px 20px 10px;
  ${({ last }) => last && css`
    padding-top: 0;
    padding-bottom: 30px;
  `}
`;