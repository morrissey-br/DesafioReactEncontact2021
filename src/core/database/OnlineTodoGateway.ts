import Todo from "../model/Todo";
import { TodoDTO } from "./dtos/TodoDTO";

export interface OnlineTodoGateway {
    fetchJSON(): Promise<TodoDTO[]>;
}