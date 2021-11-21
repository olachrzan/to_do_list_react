import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Container, Button } from "./styled";

const TextButtons = () => {
	const { tasks, hideDone } = useSelector(selectTasks);
	const dispatch = useDispatch();

	if (tasks.length === 0)
		return null;

	return (
		<Container>
			<Button onClick={() => dispatch(toggleHideDone())} >
				{hideDone ? "Pokaż" : "Ukryj"} ukończone
			</Button>
			<Button
				onClick={() => dispatch(setAllDone())}
				disabled={tasks.every(({ done }) => done)}
			>
				Ukończ wszystkie
			</Button>
		</Container>
	)
};

export default TextButtons;