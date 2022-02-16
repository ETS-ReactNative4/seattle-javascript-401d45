import { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import PersonForm from './PersonForm/PersonForm';

function App() {

  let [people, setPeople] = useState([]);
  let [toggle, setToggle] = useState(false);

  //componentDidMount
  useEffect(() => {
    async function doSomething() {}
    doSomething();

    console.log('component is mounted');
  }, []); // empty list of things that could change

  // how we handle componentDidUpdate
  useEffect(() => {
    console.log('People has been updated');
  }, [people]); // watch for updates to name and run our callback

  function addPerson({name, age}) {
    setPeople([...people, {name, age}]);
  }

  function toggleForm() {
    // setters let you define callback that receieve the current state before you update fires
    setToggle((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {toggle ? <PersonForm handleSubmit={addPerson} /> : null}
        <button onClick={toggleForm}>Toggle Form</button>
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
