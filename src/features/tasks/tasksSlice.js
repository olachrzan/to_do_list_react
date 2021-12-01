import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    loading: false,
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: newTaskObject }) => {
      tasks.push(newTaskObject);
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1)
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: state => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks.concat(state.tasks);
      state.loading = false;
    },
    fetchExampleTasksFailure: state => {
      state.loading = false;
    }
  }
});

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksFailure,
} = tasksSlice.actions;

const selectTasksSlice = state => state.tasks;

export const selectTasks = state => selectTasksSlice(state).tasks;
export const selectLoading = state => selectTasksSlice(state).loading;
export const selectHideDone = state => selectTasksSlice(state).hideDone;

export const selectTasksId = state => {
  const tasks = selectTasks(state);
  for (const task of tasks) {
    return task.id
  }
};

export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;