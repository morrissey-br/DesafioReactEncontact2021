import TodoRepository from "./TodoRepository";

export default class TodoManager {
    todoRepo: TodoRepository;

    constructor(todoRepo: TodoRepository) {
        this.todoRepo = todoRepo;
    }

    finishAllTodos() {
        const allTodos = this.todoRepo.getAllTodos();
        allTodos.forEach(todo => {
            todo.finish();
        })
    }
}