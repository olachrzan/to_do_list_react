import { Wrapper, Header, Title } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
	<Wrapper>
		<Header>
			<Title>{title}</Title>
			{extraHeaderContent}
		</Header>
		<div>{body}</div>
	</Wrapper>
);

export default Section;