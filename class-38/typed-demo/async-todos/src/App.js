import './App.css';
import {Provider} from 'react-redux';
import createReduxStore from './store/index.js';

import TodoList from './components/TodoList/TodoList.jsx';

function App() {
  return (
    <Provider store={createReduxStore()}>
      <div className="App">
        <header className="App-header">
          <TodoList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
