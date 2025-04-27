import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm.js';
import TaskList from './components/TaskList.js';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // To store the task being edited

  // Fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  // Handle adding a task (Create)
  const addTask = async (task) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      fetchTasks(); // Fetch the updated task list after adding
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // Handle updating a task (Update)
  const updateTask = async (updatedTask) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${updatedTask.id}`, updatedTask);
      fetchTasks(); // Fetch the updated task list after updating
      setEditingTask(null); // Reset editing task state
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  // Handle deleting a task (Delete)
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks(); // Fetch the updated task list after deletion
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks when the component mounts
  }, []);

  return (
    <div>
      <h1>Task Management</h1>
      {/* Pass the addTask and updateTask functions to TaskForm */}
      <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} />
      {/* Pass tasks, deleteTask, and setEditingTask to TaskList */}
      <TaskList tasks={tasks} deleteTask={deleteTask} setEditingTask={setEditingTask} />
    </div>
  );
};

export default App;
