import "./style.css";

const TextButtons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
	if (tasks.length === 0)
		return null;

	return (
		<div className="textButtons">
			<button onClick={toggleHideDone} className="textButtons__button">
				{hideDone ? "Pokaż" : "Ukryj"} ukończone
			</button>

			<button
				className="textButtons__button"
				onClick={setAllDone}
				disabled={tasks.every(({ done }) => done)}
			>
				Ukończ wszystkie
			</button>
		</div >
	)
};

export default TextButtons;