import styled from "styled-components";

const NewTaskForm = styled.form`
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Button = styled.input`
  padding: 9px;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: filter 0.4s, transform 0.4s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.04);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-grow: 1;
  }
`;

export { NewTaskForm, Button };