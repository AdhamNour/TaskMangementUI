import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../TasksList/presentation/models/TaskSlice'
import searchTextReducer from '../layout/models/searchTextSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    searchText:searchTextReducer
   
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


