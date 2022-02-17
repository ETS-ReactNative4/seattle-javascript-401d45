export const initialState = {
  name: 'Sesame Street',
  characters: ['Big Bird', "Oscar", "The Count"],
}

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return { ...state, characters: [...state.characters, action.payload] };
    default:
      return state;
  }
}
