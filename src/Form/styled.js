import styled from "styled-components";

const StyledForm = styled.form`
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  padding: 8px;
  border: 2px solid #ddd;

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
  }
`;

const Button = styled.input`
  padding: 9px;
  background-color: teal;
  color: #fff;
  border: none;
  transition: background-color 0.4s, transform 0.4s;

  &:hover {
  background-color: hsl(180, 100%, 28%);
  transform: scale(1.04);
  cursor: pointer;
  }

  &:active {
  background-color: hsl(180, 100%, 30%);
  }

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

export { StyledForm, Input, Button };