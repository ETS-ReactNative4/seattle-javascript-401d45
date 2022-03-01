// 3 things for every reducer file
//   * intialState object
//   * reducer function
//   * one or more actions

const initialState = [];

const messageReducer = (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case "ADD_MESSAGE":
      return [...state, payload];
    default:
      return state;
  }
}

export const addMessage = (message) => {
  return {
    type: 'ADD_MESSAGE',
    paylaod: message
  }
}

export default messageReducer;
