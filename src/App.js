import React from 'react';
import './App.css';
import { TodoList } from './components';
import GlobalState from './context/GlobalContext';

function App() {
  return (
    <GlobalState>
      <TodoList />
    </GlobalState>
  );
}

export default App;
