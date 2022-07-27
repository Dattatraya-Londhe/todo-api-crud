//console.log("Hello.....");
import express, { Request, Response, NextFunction } from "express";
import {json} from 'body-parser';  //extract data json data from body part of any request

//import routes
import todoRoutes from "./routes/todos";

const app = express();
app.use(json());  //register it as middleware in running server
app.listen(3000);

//Connect to running express app
//all incomming request to /todos will redirect to todoRoutes
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
console.log("End....");
