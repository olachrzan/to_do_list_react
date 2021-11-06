import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  margin-left: 30px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.colors.teal };
  transition: color 0.4s;

  &:hover {
    color: hsl(180, 100%, 32%);
    cursor: pointer;
  }

  &:active {
    color: hsl(180, 100%, 34%);
  }

  &:disabled {
    color: #aaa;
    cursor: default;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    margin: 20px 0 0 0;
  }
`;

export {Container, Button};