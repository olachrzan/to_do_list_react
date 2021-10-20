import "./style.css";

const TasksList = ({ tasks, hideDone, removeTask }) => (
   <ul className="list">
      {tasks.map(task => (
         <li
            key={task.id}
            className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}>
            <button className="list__button">
               {task.done ? "✔" : ""}
            </button>
            <span className={`list__span ${task.done ? "list__span--done" : ""}`}>
               {task.content}
            </span>
            <button
               className="list__button list__button--remove"
               onClick={() => removeTask(task.id)}
            >🗑</button>
         </li>
      ))}
   </ul >
);

export default TasksList;