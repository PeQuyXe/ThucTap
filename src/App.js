import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-list">
        <h1>Danh sách công việc</h1>
        <TodoList />
    </div>
  );
}

export default App;
