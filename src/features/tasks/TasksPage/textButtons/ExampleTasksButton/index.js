import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksId, selectLoading } from "../../../tasksSlice";
import { Button } from "../styled";

const ExampleTasksButton = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const taskId = useSelector(selectTasksId);

	return (
		<Button
			disabled={loading || taskId === "Fis3G6NsVjamc56tA-MlC" || taskId === "2931yO2GKzfC6VG743XzR"}
			onClick={() => dispatch(fetchExampleTasks())}
		>
			{
				loading
					? "Ładowanie..."
					: (taskId === "Fis3G6NsVjamc56tA-MlC" || taskId === "2931yO2GKzfC6VG743XzR"
						? "Przykładowe zadania zostały pobrane"
						: "Pobierz przykładowe zadania")}
		</Button>
	)
};

export default ExampleTasksButton;
