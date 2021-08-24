import Todo from "../model/Todo";

export default interface ITodoRepository {
    newID(): string;
    add(todo: Todo): void;
    remove(todo: Todo): void;
    getByID(id: string): Todo;
    getAllTodos(): Array<Todo>;
    allTodosQuantity(): number;
    getCompletedTodos (): Array<Todo>;
    completedTodosQuantity(): number;
    removeCompletedTodos(): void;
    getActiveTodos(): Array<Todo>;
    activeTodosQuantity(): number;
}