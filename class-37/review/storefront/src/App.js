import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store/index.js';
import CategoryList from './components/CategoryList/CategoryList.jsx';

function App() {
  return (
    <Provider store={createReduxStore()}>
      <div className="App">
        <header className="App-header">
          <h1>Store Front</h1>
          <CategoryList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
