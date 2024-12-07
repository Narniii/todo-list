import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import { thunk } from 'redux-thunk';
const reducers = combineReducers({
    todos: todoReducer,
});


const persistConfig = {
    key: 'root',
    storage,
    // Specify the reducers you want to persist
    whitelist: ['todos'], // In this example, we persist the 'user' reducer
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
});


export default store;
