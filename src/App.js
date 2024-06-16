import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GroupList from './components/GroupList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='heading'>
        <h1>Todo Status Viewer</h1>
        </div>
       
        <GroupList />
      </div>
    </Provider>
  );
}

export default App;
