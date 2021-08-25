import Todo from "../model/Todo";
import TodoRepository from "../services/ITodoRepository";
import { v4 as uuid } from 'uuid';
import { OnlineTodoGateway } from "./OnlineTodoGateway";
import { TodoDTO } from "./dtos/TodoDTO";

export default class TodoMemoryRepository implements TodoRepository {

    private todoList: Array<Todo> = [];

    async fetchTodosOnline(onlineTodoGateway: OnlineTodoGateway) {
        const todoDTOs: TodoDTO[] = await onlineTodoGateway.fetchJSON()
        todoDTOs.forEach((todoDTO) => {
            this.todoList.push(Todo.recreate(todoDTO.id, todoDTO.title, todoDTO.isDone))
        })
    }

    newID(): string {
        return uuid();
    }
    add(todo: Todo): void {
        try {
            this.getByID(todo.getID);
        } catch {
            this.todoList.unshift(todo);
            return
        }
        throw new Error('Todo já existente');
    }
    remove(todo: Todo): void {
        const index = this.todoList.indexOf(todo)
        if (index === -1) {
            throw new Error('Todo não existe no repositório')
        }
        this.todoList.splice(index, 1);
    }
    getByID(id: string): Todo {
        const result = this.todoList.find((todo) => todo.getID === id);
        if (!result) {
            throw new Error('Não existe todo com esse id');
        }
        return result;

    }
    getAllTodos(): Todo[] {
        return this.todoList;
    }
    allTodosQuantity(): number {
        return this.todoList.length;
    }
    getCompletedTodos(): Todo[] {
        return this.todoList.filter(todo => todo.getIsDone === true)
    }
    completedTodosQuantity(): number {
        return this.todoList.filter(todo => todo.getIsDone === true).length;
    }
    removeCompletedTodos(): void {
        this.todoList = this.todoList.filter(todo => todo.getIsDone === false);
    }
    getActiveTodos(): Todo[] {
        return this.todoList.filter(todo => todo.getIsDone === false)
    }
    activeTodosQuantity(): number {
        return this.todoList.filter(todo => todo.getIsDone === false).length;
    }

}