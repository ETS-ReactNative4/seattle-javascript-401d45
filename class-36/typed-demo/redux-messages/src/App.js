import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store';
import FriendList from './components/FriendList/FriendList';

const store = createReduxStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>My Messaging App</h1>
        </header>
        <FriendList myProp='Jacob'/>
      </div>
    </Provider>
  );
}

export default App;
