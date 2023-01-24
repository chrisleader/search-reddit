import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: '',
  buttonClicked: '',
  error: false,
  isLoading: false,
  results: []
};

export const redditSlice = createSlice({
  name: "reddit",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setButtonClicked: (state, action) => {
      state.buttonClicked = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    // queryStart: (state) => {
    //     state.isLoading = true;
    //     state.error = false;
    // },
    // querySuccess: (state, action) => {
    //     state.isLoading = false;
    //     state.error = false;
    //     state.results = action.payload;
    // },
    // queryFailure: (state) => {
    //     state.isLoading = false;
    //     state.error = true;
    // },
  }
});

export const { 
  setQuery,
  setButtonClicked,
  setResults,
  // queryStart,
  // querySuccess,
  // queryFailure,
 } = redditSlice.actions;
 
export default redditSlice.reducer;
