import './App.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';

function App() {

  return (
    <div className="App">
      <Header initialTitle="State Demo"/>
      <Counter />
    </div>
  );
}

export default App;
