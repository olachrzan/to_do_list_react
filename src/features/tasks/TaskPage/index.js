import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../../../common/Container";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { TaskDetails } from "./styled";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <h1>Szczegóły zadania</h1>
      <Section
        title={task ? task.content : "Nie znaleziono zadania :("}
        body={
          task
            ? <TaskDetails>
              <strong>Ukończone: </strong>{task.done ? "Tak" : "Nie"}
            </TaskDetails>
            : null
        }
      />
    </Container>
  );
};

export default TaskPage;