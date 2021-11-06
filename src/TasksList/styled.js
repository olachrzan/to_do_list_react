import styled, { css } from "styled-components";

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
`;

const Item = styled.li`
  padding: 10px;
  border-bottom: 2px solid #eee;
  display: flex;
  align-items: center;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

const Content = styled.span`
  margin: 0 15px;
  flex-grow: 1;

  ${({ done }) => done && css`
    text-decoration: line-through;
  `}
`;

const Button = styled.button`
  height: 25px;
  width: 25px;
  background-color: hsl(120, 100%, 25%);
  color: #fff;
  border: none;
  font-size: 14px;
  flex-shrink: 0;
  transition: background-color 0.4s;

  &:hover {
    background-color: hsl(120, 100%, 30%);
    cursor: pointer;
  }

  &:active {
    background-color: hsl(120, 100%, 34%);
  }

  ${({ remove }) => remove && css`
    background-color: hsl(348, 83%, 47%);

    &:hover {
      background-color: hsl(348, 83%, 54%);
    }

    &:active {
      background-color: hsl(348, 83%, 58%);
    }
  `}
`;

export { List, Item, Content, Button };