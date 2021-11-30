import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
`;

export const List = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 20px;
  letter-spacing: 0.5px;
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &.active {
    font-weight: bold;
  }

`;