import "./style.css";

const TasksList = (props) => (
   <ul className="list">
      {props.tasks.map(task => (
         <li
            key={task.id}
            className={`list__item ${task.done && props.hideDoneTasks ? "list__item--hidden" : ""}`}>
            <button className="list__button">
               {task.done ? "✔" : ""}
            </button>
            <span className={`list__span ${task.done ? "list__span--done" : ""}`}>
               {task.content}
            </span>
            <button className="list__button list__button--remove">🗑</button>
         </li>
      ))}
   </ul >
);

export default TasksList;