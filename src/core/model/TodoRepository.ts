import Todo from "./Todo";

export default interface TodoRepository {
    newID(): String;
    add(todo: Todo): void;
    remove(todo: Todo): void;
    getByID(id: String): Todo;
    getAllTodos(): Array<Todo>;
    allTodosQuantity(): number;
    getCompletedTodos (): Array<Todo>;
    completedTodosQuantity(): number;
    removeCompletedTodos(): void;
    getActiveTodos(): Array<Todo>;
    activeTodosQuantity(): number;
}