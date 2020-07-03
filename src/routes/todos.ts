import { Router } from 'express';
// const express = require('express');
// const Router = express.Router

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

const router = Router(); // allow us to register middleware using post, get

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;