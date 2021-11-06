import { StyledSection, Header, Title } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
   <StyledSection>
      <Header>
         <Title>{title}</Title>
         {extraHeaderContent}
      </Header>
      <div>{body}</div>
   </StyledSection>
);

export default Section;