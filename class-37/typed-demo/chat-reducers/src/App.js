import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store';
import ChannelList from './components/ChannelList/ChannelList.jsx';

function App() {
  return (
    <Provider store={createReduxStore()}>
      <div className="App">
        <header className="App-header">
          <ChannelList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
