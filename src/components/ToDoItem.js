import React from 'react';
import './Addbutton.css';

function ToDoItem({ task, index, toggleTask, removeTask }) {
  return (
    <div className='home'>
      <span style={{color: task.completed ? 'gray' : 'black' }}>
        {task.text}
      </span>
      {' '}
      <button style={{color: 'blue'}} onClick={() => toggleTask(index)}>
        {task.completed ? 'Hoàn Tác' : 'Hoàn Thành'}
      </button>
      {' '}
      <button  style={{color: 'red'}}  onClick={() => removeTask(index)}>Xóa</button>
    </div>
  );
}

export default ToDoItem;
