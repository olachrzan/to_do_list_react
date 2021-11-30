import { BrowserRouter, NavLink, Switch, Route, Redirect } from "react-router-dom"
import AuthorPage from "./features/author/AuthorPage"
import TasksPage from "./features/tasks/TasksPage"

export const App = () => (
  <BrowserRouter basename="/to_do_list_react">
    <nav>
      <ul>
        <li><NavLink to="/zadania">Zadania</NavLink></li>
        <li><NavLink to="/autor">O autorze</NavLink></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </BrowserRouter>
)