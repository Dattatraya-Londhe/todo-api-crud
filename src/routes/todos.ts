import { Router } from "express";
import {createTodo} from '../controllers/todo'

const router = Router(); //allow to register middleware

router.post('/',createTodo);  //call createTodo() funcion in controllers

router.get('/');

router.patch('/:id');

router.delete('/:id');

export default router;