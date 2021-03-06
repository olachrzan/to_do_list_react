import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    word-break: break-word;
    background-color: ${({ theme }) => theme.colors.gallery};
    font-family: 'Open Sans', sans-serif;
    line-height: 150%;
  }
`;