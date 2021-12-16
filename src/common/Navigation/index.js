import { toAuthor, toTasks } from "../../routes";
import { NavigationBar, List, ListItem, Link } from "./styled";

const Navigation = () => (
  <NavigationBar>
    <List>
      <ListItem><Link to={toTasks()}>Zadania</Link></ListItem>
      <ListItem><Link to={toAuthor()}>O autorze</Link></ListItem>
    </List>
  </NavigationBar>
);

export default Navigation;