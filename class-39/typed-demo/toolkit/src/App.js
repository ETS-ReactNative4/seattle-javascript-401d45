import './App.css';
import {Provider} from 'react-redux';
import store from './store/index-toolkit.js';
import People from './components/People/People.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <People />
        </header>
      </div>
    </Provider>
  );
}

export default App;
