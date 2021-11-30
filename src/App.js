import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Navigation from "./common/Navigation"
import AuthorPage from "./features/author/AuthorPage"
import TasksPage from "./features/tasks/TasksPage"

export const App = () => (
  <BrowserRouter basename="/to_do_list_react">
    <Navigation />
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