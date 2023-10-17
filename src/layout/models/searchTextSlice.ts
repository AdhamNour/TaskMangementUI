import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export interface SearchTextSlice{
    searchText:string
}

const initialState: SearchTextSlice = {
    searchText:''
  }

  export const searchTextsSlice = createSlice({
    name: 'searchTexts',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
  
      // Use the PayloadAction type to declare the contents of `action.payload`
      editSearchText: (state, action: PayloadAction<string>) => {
        state.searchText=action.payload;
      }
    }
  })
  

export const {editSearchText} = searchTextsSlice.actions

export const selectSearchTexts = (state: RootState) => state.searchText;

export default searchTextsSlice.reducer


