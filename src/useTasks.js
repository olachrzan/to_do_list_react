import { useEffect, useState } from "react";

const getStoredTasks = () => {
  const storedTasks = localStorage.getItem("tasks");

  return storedTasks !== null ? JSON.parse(storedTasks) : [];
};

export const useTasks = () => {

  const [tasks, setTasks] = useState(getStoredTasks);

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