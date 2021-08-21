import TodoMemoryRepository from '../../core/database/TodoMemoryRepository';
import Todo from '../../core/model/Todo';

describe('TodoMemoryRepository Test: ', () => {
    let todoMemoryRepository: TodoMemoryRepository;

    beforeEach(() => {
        todoMemoryRepository = new TodoMemoryRepository();
    })

    test('Deve gerar ids para os todos', () => {
        expect(todoMemoryRepository.newID()).toMatch('');
    })

    test('Deve permitir adicionar um todo e retorna-lo pelo seu id', () => {
        const todoID = todoMemoryRepository.newID();
        const todo = new Todo(todoID, 'Título 1');
        todoMemoryRepository.add(todo);
        const todoRetornado = todoMemoryRepository.getByID(todoID);
        expect(todoRetornado).toEqual(todo);
    });

    test('Não deve permitir adicionar um todo repetido (mesmo id), emitindo erro', () => {
        const todoID = todoMemoryRepository.newID();
        const todo = new Todo(todoID, 'Título 1');
        const todo2 = new Todo(todoID, 'Título 2');
        todoMemoryRepository.add(todo);
        expect(() => {todoMemoryRepository.add(todo2)}).toThrowError('Todo já existente');
    });

    test('Deve emitir erro caso não exista todo com id passado', () => {
        const idQualquer = todoMemoryRepository.newID();
        expect(() => {todoMemoryRepository.getByID(idQualquer)}).toThrow(new Error('Não existe todo com esse id'));
    });

    test('Deve permitir remover um Todo passando ele', () => {
        const todoID = todoMemoryRepository.newID();
        const todo = new Todo(todoID, 'Título 1');
        todoMemoryRepository.add(todo);
        expect(todoMemoryRepository.getByID(todoID)).toBe(todo);
        todoMemoryRepository.remove(todo);
        expect(() => {todoMemoryRepository.getByID(todoID)}).toThrowError('Não existe todo com esse id');
    })

    test('Deve permitir retornar todos os Todos salvos', () => {
        const todoID1 = todoMemoryRepository.newID();
        const todo1 = new Todo(todoID1, 'Título 1');
        const todoID2 = todoMemoryRepository.newID();
        const todo2 = new Todo(todoID2, 'Título 2');
        const todoID3 = todoMemoryRepository.newID();
        const todo3 = new Todo(todoID3, 'Título 1');

        todoMemoryRepository.add(todo1);
        todoMemoryRepository.add(todo2);
        todoMemoryRepository.add(todo3);

        const todoList = todoMemoryRepository.getAllTodos();
        expect(todoList.find((todo) => todo === todo1)).toBe(todo1)
        expect(todoList.find((todo) => todo === todo2)).toBe(todo2)
        expect(todoList.find((todo) => todo === todo3)).toBe(todo3)
    })

    test('Deve retornar a quantidade total de todos', () => {
        const todoID1 = todoMemoryRepository.newID();
        const todo1 = new Todo(todoID1, 'Título 1');
        const todoID2 = todoMemoryRepository.newID();
        const todo2 = new Todo(todoID2, 'Título 2');
        const todoID3 = todoMemoryRepository.newID();
        const todo3 = new Todo(todoID3, 'Título 1');

        todoMemoryRepository.add(todo1);
        todoMemoryRepository.add(todo2);
        todoMemoryRepository.add(todo3);

        const quantity = todoMemoryRepository.allTodosQuantity()
        expect(quantity).toBe(3)
    })

    test('Deve retornar a quantidade total de todos completos', () => {
        const todoID1 = todoMemoryRepository.newID();
        const todo1 = new Todo(todoID1, 'Título 1');
        const todoID2 = todoMemoryRepository.newID();
        const todo2 = new Todo(todoID2, 'Título 2');
        const todoID3 = todoMemoryRepository.newID();
        const todo3 = new Todo(todoID3, 'Título 1');

        todo2.finish();
        todo3.finish();

        todoMemoryRepository.add(todo1);
        todoMemoryRepository.add(todo2);
        todoMemoryRepository.add(todo3);

        const completedTodoQuantity = todoMemoryRepository.completedTodosQuantity();
        expect(completedTodoQuantity).toBe(2);
    })


})