import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #fff;
  padding: 0;
  margin-bottom: 10px;
  box-shadow: 0 0 7px #ddd;
`;

const Header = styled.header`
  border-bottom: 2px solid #eee;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    align-self: flex-start;
  }
`;

export {StyledSection, Header, Title};