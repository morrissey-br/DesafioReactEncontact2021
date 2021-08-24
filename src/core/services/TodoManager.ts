import Todo from "../model/Todo";
import ITodoRepository from "./ITodoRepository";

export default class TodoManager {
    todoRepository: ITodoRepository;

    constructor(todoRepository: ITodoRepository) {
        this.todoRepository = todoRepository;
    }
    createNewTodo(title: string): Todo {
        const newID = this.todoRepository.newID()
        const newTodo = Todo.create(newID, title)
        this.todoRepository.add(newTodo)
        return newTodo
    }
    removeTodo(todoID: string): void {
        const todo = this.todoRepository.getByID(todoID);
        this.todoRepository.remove(todo);
    }
    changeTodoTitle(todoID: string, newTitle: string): void {
        const todo = this.todoRepository.getByID(todoID)
        todo.changeTitle(newTitle)
    }
    toggleDoneTodo(todoID: string): void {
        const todo = this.todoRepository.getByID(todoID)
        todo.toggleDone()
    }
    toggleDoneAllTodos(): void {
        const allTodos = this.todoRepository.getAllTodos()
        let isAllDone = true;
        allTodos.forEach(todo => {
            if(!todo.getIsDone) {
                isAllDone = false
            }
        });
        if(isAllDone) {
            allTodos.forEach((todo) => {
                todo.reopen()
            })
        }else {
            allTodos.forEach((todo) => {
                todo.finish()
            })
        }
    }
}