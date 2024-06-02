import React, { useState, useEffect } from 'react';
import './App.css';
import closeIcon from './images/remove.png';

const getLocalStorage = () => {
  let list = localStorage.getItem('tasks');
  console.log(list);


  if (list) {
    return JSON.parse(localStorage.getItem('tasks'))
  } else {
    return [];
  }
}


function App() {
  const [tasks, setTasks] = useState(getLocalStorage());
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');



  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    console.log('Saving tasks to local storage');
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tasks saved:', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmedTask = newTask.trim();
    if (trimmedTask) {
      setTasks([...tasks, { text: trimmedTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const filteredTasks = () => {
    let filtered = tasks;
    if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filter === 'active') {
      filtered = filtered.filter(task => !task.completed);
    }

    filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.text.localeCompare(b.text);
      } else {
        return b.text.localeCompare(a.text);
      }
    });

    return filtered;
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <label htmlFor="newTask">Enter New Task</label>
      <br />
      <input
        type="text"
        id="newTask"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <button
        style={{ background: 'red' }}
        onClick={() => handleFilterChange(filter === 'all' ? 'completed' : filter === 'completed' ? 'active' : 'all')}
      >
        {filter === 'all' ? 'Show Completed' : filter === 'completed' ? 'Show Active' : 'Show All'}
      </button>
      <button style={{ background: 'orange' }} onClick={toggleSortOrder}>
        {sortOrder === 'asc' ? 'Sort Desc' : 'Sort Asc'}
      </button>

      <ul>
        {filteredTasks().map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span className="custom-checkbox">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
            </span>
            <span className='text'>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)} style={{ padding: 0, border: 'none', background: 'transparent' }}>
              <img src={closeIcon} alt="NO IMAGE" className='close-icon' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
