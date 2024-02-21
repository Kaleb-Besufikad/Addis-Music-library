
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducer  from './reducers';
import thunkMiddleware from 'redux-thunk';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore(
    {reducer: reducer},
);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;