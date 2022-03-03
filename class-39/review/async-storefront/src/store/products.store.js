import axios from 'axios';

const initialState = {
  count: 1,
  results: [{
    "_id": "test",
    "name": "test",
    "category": "test",
    "inStock": 10,
    "price": 2,
    "__v": 0
  }]
};

const PRODUCTS_URL = 'https://api-js401.herokuapp.com/api/v1/products';

const productsReducer = (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case "CREATE_PRODUCT":
      return {...state, count: state.count + 1, results: [...state.results, payload]};
    default:
      return state;
  }
}

// async action
export const createProduct = (json) => async dispatch => {
  // I think this just sends back a single product.
  try {
    const response = await axios.post(PRODUCTS_URL, json);
    dispatch({
      type: 'CREATE_PRODUCT',
      payload: response.data
    });
  } catch(e) {
    console.log(e);
  }
}

export default productsReducer;
