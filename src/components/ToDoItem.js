import React from 'react';
import './Addbutton.css';

function ToDoItem({ task, index, toggleTask, removeTask }) {
  return (
    <div>
      <span style={{ color: task.completed ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1)' }}>
        {task.text}
      </span>
      {'  '}
      <button type='button' className='btn btn-primary' onClick={() => toggleTask(index)}>
        {task.completed ? 'Hoàn Tác' : 'Hoàn Thành'}
      </button>
      {'  '}
      <button type ='button' className ='btn btn-danger' onClick={() => removeTask(index)}>Xóa</button>
    </div>
  );
}

export default ToDoItem;
