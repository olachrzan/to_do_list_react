import { useRef, useState } from "react";
import { NewTaskForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
   const inputRef = useRef(null);
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();
      const trimmedNewTaskContent = newTaskContent.trim();
      if (trimmedNewTaskContent === "") {
         return
      }
      addNewTask(trimmedNewTaskContent);
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