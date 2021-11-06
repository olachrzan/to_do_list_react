import { useEffect, useState } from "react";

export const useTasks = () => {
  const storedTasks = localStorage.getItem("tasks");

	const [tasks, setTasks] = useState(
		storedTasks !== null ? JSON.parse(storedTasks) : []
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        content: newTaskContent,
        done: false,
      }
    ])
  };

  return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask }
}