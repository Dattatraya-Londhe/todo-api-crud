"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//console.log("Hello.....");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser"); //extract data json data from body part of any request
//import routes
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)()); //register it as middleware in running server
app.listen(3000);
//Connect to running express app
//all incomming request to /todos will redirect to todoRoutes
app.use("/todos", todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
console.log("End....");
