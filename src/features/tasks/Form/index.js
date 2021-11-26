import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { NewTaskForm, Input, Button } from "./styled";

const Form = () => {
	const inputRef = useRef(null);
	const [newTaskContent, setNewTaskContent] = useState("");

	const dispatch = useDispatch();

	const onFormSubmit = (event) => {
		event.preventDefault();
		const trimmedNewTaskContent = newTaskContent.trim();
		if (trimmedNewTaskContent === "") {
			return
		}

		dispatch(addTask({
			content: trimmedNewTaskContent,
			done: false,
			id: nanoid()
		}));

		setNewTaskContent("");
	};

	return (
		<NewTaskForm onSubmit={onFormSubmit}>
			<Input
				value={newTaskContent}
				onChange={({ target }) => setNewTaskContent(target.value)}
				placeholder="Co jest do zrobienia?"
				ref={inputRef}
				autoFocus
			/>
			<Button
				type="submit"
				value="Dodaj zadanie"
				onClick={() => inputRef.current.focus()}
			/>
		</NewTaskForm>
	)
};

export default Form;