const Todo = require('../models/todoModel');

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add a new todo
const addTodo = async (req, res) => {
  const { text } = req.body;

  try {
    const newTodo = new Todo({
      text,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Toggle todo completion status
const toggleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndUpdate(id, { $set: { completed: !req.body.completed } }, { new: true });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getTodos, addTodo, toggleTodo, deleteTodo };
