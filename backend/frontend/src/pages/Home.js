import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addTodo = (todo) => {
    axios.post('http://localhost:5000/api/todos', todo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error(error));
  };

  const toggleTodo = (todo) => {
    axios.patch(`http://localhost:5000/api/todos/${todo._id}`, { completed: todo.completed })
      .then((response) => {
        const updatedTodos = todos.map((t) => t._id === todo._id ? response.data : t);
        setTodos(updatedTodos);
      })
      .catch((error) => console.error(error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm onAdd={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Home;
