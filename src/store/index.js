import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import redditReducer from './redditSlice';
import thunk from 'redux-thunk'

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