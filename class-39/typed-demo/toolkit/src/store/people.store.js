const initialState = [
  { name: 'Jacob' },
  { name: 'Hexx' },
  { name: 'Adrian' }
]

const peopleReducer = (state= initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case "ADD_PERSON":
      return [...state, payload];
    case "REMOVE_PERSON":
      return state.filter(person => person.name !== action.payload);
    default:
      return state;
  }
}

export const addPeople = (person) => {
  return {
    type: "ADD_PERSON",
    payload: person,
  }
}

export const removePeople = (person) => {

}

export default peopleReducer;
