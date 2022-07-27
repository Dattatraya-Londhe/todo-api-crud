"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODO = [];
const createTodo = (req, res, next) => {
    const newTodo = new todo_1.Todo(Math.random().toString(), req.body.text);
    TODO.push(newTodo);
    res.json({ message: "New List created successfully", ceatedList: newTodo });
};
exports.createTodo = createTodo;
