import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import redditReducer from './redditSlice';
import thunk from 'redux-thunk'

// This index.js file configures the Redux store. persistReducer is also configured here to ensure state persist across a session.

const persistConfig = {
    key: 'root',
    storage
};

const reducer = combineReducers({
    reddit: redditReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
