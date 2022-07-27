import { RequestHandler } from "express";
import { Todo } from "../models/todo";
const TODO: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
    
  const newTodo = new Todo(Math.random().toString(), (req.body as {text:string}).text);

  TODO.push(newTodo);
  res.json({ message: "New List created successfully", ceatedList: newTodo });
};
