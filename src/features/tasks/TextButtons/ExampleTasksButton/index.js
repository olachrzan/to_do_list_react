import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Container, Button } from "../styled";

const ExampleTasksButton = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);

	return (
		<Container>
			<Button
				disabled={loading}
				onClick={() => dispatch(fetchExampleTasks())}
			>
				{loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
			</Button>
		</Container>
	)
};

export default ExampleTasksButton;
