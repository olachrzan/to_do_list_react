import { Container, Button } from "./styled";

const TextButtons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
	if (tasks.length === 0)
		return null;

	return (
		<Container>
			<Button onClick={toggleHideDone} >
				{hideDone ? "Pokaż" : "Ukryj"} ukończone
			</Button>
			<Button
				onClick={setAllDone}
				disabled={tasks.every(({ done }) => done)}
			>
				Ukończ wszystkie
			</Button>
		</Container>
	)
};

export default TextButtons;