import React, { useState } from 'react';
import './ToDoForm.css';


function ToDoForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        className="search-label"
        placeholder="Công việc cần làm"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="cssbuttons-io-button">
      <span>Thêm</span>
    </button>
    </form>
  );
}

export default ToDoForm;
