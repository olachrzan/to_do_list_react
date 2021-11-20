import { useState } from "react";
import { useTasks } from "./useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import TextButtons from "./TextButtons";
import Section from "../../common/Section";
import Container from "../../common/Container";

const TasksSide = () => {
	const [hideDone, setHideDone] = useState(false);

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } = useTasks();

	return (
		<Container>
			<h1>Lista zadań</h1>
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
	);
}

export default TasksSide;
