import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from './middlewares/thunk.js';
import thunk from 'redux-thunk';
import todoReducer from './todos.store.js';

let reducers = combineReducers({
  todos: todoReducer,
});

export default function createReduxStore() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
