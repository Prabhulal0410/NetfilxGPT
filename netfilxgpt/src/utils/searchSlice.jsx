import { createSlice } from "@reduxjs/toolkit";

// Load previous GPT Search state from localStorage
const savedGptState = JSON.parse(localStorage.getItem("showGptSearch"));

const searchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: savedGptState ?? false, // restore state after refresh
    movieNames: [],
    movieResult: [],
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;

      // Save updated value in localStorage
      localStorage.setItem("showGptSearch", state.showGptSearch);
    },

    addGptMovieresult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
  },
});

export const { toggleGptSearchView, addGptMovieresult } = searchSlice.actions;
export default searchSlice.reducer;
