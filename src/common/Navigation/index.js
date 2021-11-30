import { NavigationBar, List, ListItem, Link } from "./styled";

const Navigation = () => (
  <NavigationBar>
    <List>
      <ListItem><Link to="/zadania">Zadania</Link></ListItem>
      <ListItem><Link to="/autor">O autorze</Link></ListItem>
    </List>
  </NavigationBar>
);

export default Navigation;