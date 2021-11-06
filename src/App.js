import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Form from "./Form";
import TasksList from "./TasksList";
import TextButtons from "./TextButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const theme = {
	colors: {
		teal: "hsl(180, 100%, 25%)",
	},
	breakpoints: {
		mobile: "768px",
	},
}

function App() {
	const storedTasks = localStorage.getItem("tasks");

	const [tasks, setTasks] = useState(
		storedTasks !== null ? JSON.parse(storedTasks) : []
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

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

	const setAllDone = () => {
		setTasks(tasks => tasks.map(task => ({
			...task,
			done: true,
		})));
	};

	const addNewTask = (newTaskContent) => {
		setTasks(tasks => [
			...tasks,
			{
				id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
				content: newTaskContent,
				done: false,
			}
		])
	};

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Header />
				<Section
					title="Dodaj nowe zadanie"
					body={<Form addNewTask={addNewTask} />}
				/>
				<Section
					title="Lista zadań"
					extraHeaderContent={
						<TextButtons
							tasks={tasks}
							hideDone={hideDone}
							toggleHideDone={toggleHideDone}
							setAllDone={setAllDone}
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
		</ThemeProvider>
	);
}

export default App;
