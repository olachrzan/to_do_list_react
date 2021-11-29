import { useDispatch, useSelector } from "react-redux";
import {
	selectHideDone,
	selectAreTasksEmpty,
	selectIsEveryTaskDone,
	toggleHideDone,
	setAllDone
} from "../../tasksSlice";
import { Container, Button } from "../styled";

const DoneTasksButtons = () => {
	const hideDone = useSelector(selectHideDone);
	const areTasksEmpty = useSelector(selectAreTasksEmpty);
	const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

	const dispatch = useDispatch();

	if (areTasksEmpty)
		return null;

	return (
		<Container>
			<Button onClick={() => dispatch(toggleHideDone())} >
				{hideDone ? "Pokaż" : "Ukryj"} ukończone
			</Button>
			<Button
				onClick={() => dispatch(setAllDone())}
				disabled={isEveryTaskDone}
			>
				Ukończ wszystkie
			</Button>
		</Container>
	)
};

export default DoneTasksButtons;