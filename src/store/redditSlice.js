import { createSlice } from "@reduxjs/toolkit";

// redditSlice.js initializes and stores the state for most aspects of the app. Redux's extensible architecture allows the implementation of additional slices in the future. The functions commented out below could also be used in the future to support animations across different query states, and as a template for animating other elements upon loading, like posts and comments.

const initialState = {
  query: '',
  sort: '',
  time: '',
  buttonClicked: '',
  error: false,
  isLoading: false,
  results: [],
  resultsIndex: 0,
  comments: []
};

export const redditSlice = createSlice({
  name: "reddit",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setButtonClicked: (state, action) => {
      state.buttonClicked = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setResultsIndex: (state, action) => {
      state.resultsIndex = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    }
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
  setSort,
  setTime,
  setButtonClicked,
  setResults,
  setResultsIndex,
  setComments,
  // queryStart,
  // querySuccess,
  // queryFailure,
 } = redditSlice.actions;
 
export default redditSlice.reducer;
