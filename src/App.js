import { useState } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import TextButtons from "./TextButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, content: "Zrobić zakupy", done: true },
		{ id: 2, content: "Upiec ciasto", done: false },
	]);

	const [hideDone, setHideDone] = useState(false);

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	const removeTask = (id) => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	const toggleTaskDone = (id) => {
		setTasks(tasks => tasks.map(task => {
			if (task.id === id) {
				return { ...task, done: !task.done };
			}
			return task;
		}))
	};

	return (
		<Container>
			<Header />
			<Section
				title="Dodaj nowe zadanie"
				body={<Form />}
			/>
			<Section
				title="Lista zadań"
				extraHeaderContent={
					<TextButtons
						tasks={tasks}
						hideDone={hideDone}
						toggleHideDone={toggleHideDone}
					/>
				}
				body={
					<TasksList
						tasks={tasks}
						hideDone={hideDone}
						removeTask={removeTask}
						toggleTaskDone={toggleTaskDone}
					/>
				}
			/>
		</Container>
	);
}

export default App;
