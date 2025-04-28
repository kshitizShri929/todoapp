const express = require('express');
const { getTodos, addTodo, toggleTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.patch('/:id', toggleTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
