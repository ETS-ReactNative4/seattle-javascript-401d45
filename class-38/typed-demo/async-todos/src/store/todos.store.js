import axios from 'axios';

const API_URL = 'https://api-js401.herokuapp.com/api/v1/todo';
const PRODUCTS_URL = 'https://api-js401.herokuapp.com/api/v1/products';
const CATEGORIES_URL = 'https://api-js401.herokuapp.com/api/v1/categories'

const initialState = {
  count: 0,
  results: [],
};

const todoReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'GET_TODOS':
      return payload;
    default:
      return state;
  }
}

// this is a normal action
export const setTodos = data => {
  return {
    type:'GET_TODOS',
    payload: data,
  }
}

// this is our async action using our Thunk middleware
export const getTodos = () => async (dispatch, getState) => {
  const response = await axios.get(API_URL);
  const data = response.data;
  dispatch(setTodos(data));
}

export default todoReducer;
