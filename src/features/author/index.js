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
              Cześć! Mam na imię Ola i mieszkam w Gdańsku. Bardzo lubię to miasto, chociaż mogłoby być tu więcej escape roomów 😜 Mieszkam przy lesie, niedaleko plaży, więc często chodzę na spacery. Lubię czytać książki popularonaukowe i uczyć się nowych rzeczy.
            </Content>
            <Content last>
              Pisaniem stron internetowych zaczęłam interesować się w 2020 roku. A strona, na której jesteś, jest efektem kursu, który podjęłam w celu rozwinięcia swoich umiejętności frontendowych.
            </Content>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;