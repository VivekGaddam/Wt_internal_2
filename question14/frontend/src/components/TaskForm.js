import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, editingTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  // If editingTask is provided, fill the form with its data
  useEffect(() => {
    if (editingTask) {
      setTask({ title: editingTask.title, description: editingTask.description });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      // If editing, update the task
      updateTask({ ...task, id: editingTask._id });
    } else {
      // If adding a new task
      addTask(task);
    }
    setTask({ title: '', description: '' }); // Reset form after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
