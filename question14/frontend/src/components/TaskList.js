import React from 'react';

const TaskList = ({ tasks, deleteTask, setEditingTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => setEditingTask(task)}>Edit</button>
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet!</p>
      )}
    </div>
  );
};

export default TaskList;
