import Form from "./Form";
import TasksList from "./TasksList";
import TextButtons from "./TextButtons";
import Section from "../../common/Section";
import Container from "../../common/Container";

const TasksPage = () => {

	return (
		<Container>
			<h1>Lista zadań</h1>
			<Section
				title="Dodaj nowe zadanie"
				body={<Form />}
			/>
			<Section
				title="Lista zadań"
				extraHeaderContent={<TextButtons />}
				body={<TasksList />}
			/>
		</Container>
	);
}

export default TasksPage;
