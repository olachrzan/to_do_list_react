import { useDispatch, useSelector } from "react-redux";
import { toTask } from "../../../../routes";
import { selectTasksByQuery, selectHideDone, toggleTaskDone, removeTask } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import { searchQueryParamName } from "../searchQueryParamName";
import { List, Item, Content, Button, TaskLink } from "./styled";

const TasksList = () => {
	const query = useQueryParameter(searchQueryParamName);

	const tasks = useSelector(state => selectTasksByQuery(state, query));
	const hideDone = useSelector(selectHideDone);

	const dispatch = useDispatch();

	return (
		<List>
			{tasks.map(task => (
				<Item
					key={task.id}
					hidden={task.done && hideDone}
				>
					<Button onClick={() => dispatch(toggleTaskDone(task.id))} >
						{task.done ? "✔" : ""}
					</Button>
					<Content done={task.done} >
						<TaskLink to={toTask({ id: task.id })}>{task.content}</TaskLink>
					</Content>
					<Button
						remove
						onClick={() => dispatch(removeTask(task.id))}
					>
						🗑
					</Button>
				</Item>
			))}
		</List >
	)
};

export default TasksList;