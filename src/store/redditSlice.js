import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: '',
  sort: '',
  time: '',
  buttonClicked: '',
  error: false,
  isLoading: false,
  results: [],
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
  setComments,
  // queryStart,
  // querySuccess,
  // queryFailure,
 } = redditSlice.actions;
 
export default redditSlice.reducer;
