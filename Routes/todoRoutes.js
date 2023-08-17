import { Router } from "express";
import { getTodo, getTodos } from "../Controllers/todosController";

const todoRouter = Router();

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getTodo);


export default todoRouter;