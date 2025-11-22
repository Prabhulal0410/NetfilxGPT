import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name :"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const {toggleGptSearchView} = searchSlice.actions
export default searchSlice.reducer