import { Link } from "react-router-dom";
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

const TaskLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.teal};

  &:hover {
    filter: brightness(110%);
  }
`;

const Button = styled.button`
  height: 25px;
  width: 25px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 14px;
  flex-shrink: 0;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  ${({ remove }) => remove && css`
    background-color: ${({ theme }) => theme.colors.crimson};
  `}
`;

export { List, Item, Content, TaskLink, Button };