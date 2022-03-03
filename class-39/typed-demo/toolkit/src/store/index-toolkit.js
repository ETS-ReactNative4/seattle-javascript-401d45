import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import peopleSlice from './people.slice.js';
const reducers = combineReducers({ people: peopleSlice.reducer });
const store = configureStore({ reducer: reducers });

export default store;
