import Form from "./Form";
import TasksList from "./TasksList";
import TextButtons from "./TextButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
	{ id: 1, content: "Zrobić zakupy", done: true },
	{ id: 2, content: "Upiec ciasto", done: false },
];

const hideDoneTasks = false;

function App() {
	return (
		<Container>
			<Header/>
			<Section
				title="Dodaj nowe zadanie"
				body={<Form />}
			/>
			<Section
				title="Lista zadań"
				extraHeaderContent={<TextButtons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
				body={<TasksList tasks={tasks} hideDoneTasks={hideDoneTasks} />}
			/>
		</Container>
	);
}

export default App;
