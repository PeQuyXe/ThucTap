import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import './ToDoList.css';


function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='todo-list'>
      <br></br>
      <ToDoForm addTask={addTask} />
      <br></br>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          index={index}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
