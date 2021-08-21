
import TodoMemoryRepository from "../../core/database/TodoMemoryRepository";
import Todo from "../../core/model/Todo";
import TodoManager from "../../core/model/TodoManager";



describe('TodoMagager tests: ', () => {

    let todoMemoryRepository: TodoMemoryRepository;
    let todoManager: TodoManager;

    beforeEach(() => {
        todoMemoryRepository = new TodoMemoryRepository()
        todoManager = new TodoManager(todoMemoryRepository)
    })

    test('Permitir marcar todos os Todos como concluídos', () => {
        const todoID1 = todoMemoryRepository.newID();
        const todo1 = new Todo(todoID1, 'Título 1');
        const todoID2 = todoMemoryRepository.newID();
        const todo2 = new Todo(todoID2, 'Título 2');
        const todoID3 = todoMemoryRepository.newID();
        const todo3 = new Todo(todoID3, 'Título 1');

        todoMemoryRepository.add(todo1);
        todoMemoryRepository.add(todo2);
        todoMemoryRepository.add(todo3);

        expect(todoMemoryRepository.allTodosQuantity()).toBe(3)
        expect(todoMemoryRepository.completedTodosQuantity()).toBe(0)
        todoManager.finishAllTodos();
        expect(todoMemoryRepository.completedTodosQuantity()).toBe(todoMemoryRepository.allTodosQuantity());

    })
})