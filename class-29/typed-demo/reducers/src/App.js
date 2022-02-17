import { useReducer } from 'react';
import { initialState, reducer } from './reducers/sesameStreet';
import logo from './logo.svg';
import './App.css';

function App() {

  // const initialState = {
  //   name: 'Sesame Street',
  //   characters: ['Big Bird', "Oscar", "The Count"],
  // }

  // function reducer(state, action) {
  //   switch(action.type) {
  //     case 'ADD_CHARACTER':
  //       return { ...state, characters: [...state.characters, action.payload] };
  //     default:
  //       return state;
  //   }
  // }

  // everytime we use this hook we create new state object
  let [state, dispatch] = useReducer(reducer, initialState);

  // pass state and dispatch to children

  function addCharacter(name) {
    // we refer to these objects as 'Actions'
    dispatch({
      type: 'ADD_CHARACTER',
      payload: name
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state.name}
        </p>
        <ul>
          {state.characters.map(character => <li>{character}</li>)}
        </ul>
        <button onClick={() => addCharacter('Mickey Mouse')}>Add Mickey</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
