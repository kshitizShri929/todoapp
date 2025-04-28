import React from 'react';

const Todo = ({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default Todo;
