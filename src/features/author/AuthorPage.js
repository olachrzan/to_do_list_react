import Section from "../../common/Section";
import Container from "../../common/Container";
import { Content } from "./styled";

const AuthorPage = () => {

  return (
    <Container>
      <h1>O autorze</h1>
      <Section
        title="Ola Chrzan"
        body={
          <>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dictum ex. Quisque a consequat nisl. Maecenas nec sem sem. Donec quis luctus neque. Aenean congue, dolor vitae tristique scelerisque, mauris ex varius lorem, in interdum nisi dolor nec arcu. Aenean id tristique dui. Duis ut nisi eu magna gravida lacinia. Fusce elementum aliquet elit, nec elementum est luctus eget. Quisque eget felis purus. Fusce eu laoreet massa. Pellentesque a sapien nibh. Vestibulum eros purus, scelerisque commodo justo consectetur, congue.
            </Content>
            <Content last>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut feugiat enim, vitae consectetur libero. Maecenas sollicitudin scelerisque metus fringilla finibus. Donec lectus elit, rutrum ac ex vitae, mattis auctor velit. Integer congue condimentum dapibus. Vestibulum ultrices in diam non interdum. Curabitur accumsan bibendum libero id efficitur. Curabitur sed risus.
            </Content>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;