import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,

    movieNames: [],       // FIXED
    movieResult: [],      // FIXED
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieresult: (state, action) => {
      const { movieNames, movieResult } = action.payload;

      state.movieNames = movieNames;    // FIXED
      state.movieResult = movieResult;  // FIXED
    },
  },
});

export const { toggleGptSearchView, addGptMovieresult } = searchSlice.actions;
export default searchSlice.reducer;
