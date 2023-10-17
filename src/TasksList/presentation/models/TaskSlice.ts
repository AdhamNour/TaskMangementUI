import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Task from "./Task";
import { RootState } from "../../../store/store";

export interface TaskSlice{
    tasks:Task[]
}

const initialState: TaskSlice = {
    tasks:[]
  }

  export const tasksSlice = createSlice({
    name: 'tasks',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
  
      // Use the PayloadAction type to declare the contents of `action.payload`
      addTask: (state, action: PayloadAction<Task>) => {
        state.tasks=[...state.tasks,action.payload];
      },
      deleteTask:(state,action:PayloadAction<Task>)=>{
        state.tasks = state.tasks.filter(task=>task.getId()!==action.payload.getId());
      }
    }
  })
  

export const {addTask,deleteTask} = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer


