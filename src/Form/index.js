import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
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
      <StyledForm onSubmit={onFormSubmit}>
         <Input
            value={newTaskContent}
            onChange={({ target }) => setNewTaskContent(target.value)}
            placeholder="Co jest do zrobienia?"
            autoFocus
         />
         <Button type="submit" value="Dodaj zadanie" />
      </StyledForm>
   )
};

export default Form;