import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
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
    }
  }
});

export const { addTask, removeTask, toggleTaskDone, toggleHideDone, setAllDone } = tasksSlice.actions;

const selectTasksSlice = state => state.tasks;
export const selectTasks = state => selectTasksSlice(state).tasks;
export const selectHideDone = state => selectTasksSlice(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;