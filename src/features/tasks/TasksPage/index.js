import Form from "./Form";
import TasksList from "./TasksList";
import DoneTasksButtons from "./textButtons/DoneTasksButtons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import ExampleTasksButton from "./textButtons/ExampleTasksButton";

const TasksPage = () => {
	return (
		<Container>
			<h1>Lista zadań</h1>
			<Section
				title="Dodaj nowe zadanie"
				extraHeaderContent={<ExampleTasksButton />}
				body={<Form />}
			/>
			<Section
				title="Lista zadań"
				extraHeaderContent={<DoneTasksButtons />}
				body={<TasksList />}
			/>
		</Container>
	);
}

export default TasksPage;
