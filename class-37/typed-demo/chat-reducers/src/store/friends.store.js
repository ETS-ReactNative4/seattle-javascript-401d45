// 3 things for every reducer file
//   * intialState object
//   * reducer function
//   * one or more actions

const initialState = [
  { name: 'Jacob' },
  { name: 'Hexx' }
];

const friendReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_FRIEND":
      return [...state, payload];
    default:
      return state;
  }
}

export const addMessage = (friend) => {
  return {
    type: 'ADD_FRIEND',
    paylaod: friend
  }
}

export default friendReducer;
