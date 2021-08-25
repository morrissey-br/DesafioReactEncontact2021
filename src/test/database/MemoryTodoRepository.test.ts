import { OnlineTodoGateway } from '../../core/database/OnlineTodoGateway';
import TodoMemoryRepository from '../../core/database/TodoMemoryRepository';
import Todo from '../../core/model/Todo';

describe('TodoMemoryRepository Test: ', () => {
    const onlineTodoGatewayMock: jest.Mocked<OnlineTodoGateway> = {
        fetchJSON: jest.fn()
    }
    let todoMemoryRepository: TodoMemoryRepository;

    beforeEach(() => {
        todoMemoryRepository = new TodoMemoryRepository();
    })

    test('Deve gerar ids para os todos', () => {
        expect(todoMemoryRepository.newID()).toMatch('');
    })

    test('Deve permitir adicionar um todo e retorna-lo pelo seu id', () => {
        const todoID = todoMemoryRepository.newID();
        const todo = Todo.create(todoID, 'Título 1');
        todoMemoryRepository.add(todo);
        const todoRetornado = todoMemoryRepository.getByID(todoID);
        expect(todoRetornado).toEqual(todo);
    });

    test('Não deve permitir adicionar um todo repetido (mesmo id), emitindo erro', () => {
        const todoID = todoMemoryRepository.newID();
        const todo = Todo.create(todoID, 'Título 1');
        const todo2 = Todo.create(todoID, 'Título 2');
        todoMemoryRepository.add(todo);
        expect(() => { todoMemoryRepository.add(todo2) }).toThrowError('Todo já existente');
    });

    test('Deve emitir erro caso não exista todo com id passado', () => {
        const idQualquer = todoMemoryRepository.newID();
        expect(() => { todoMemoryRepository.getByID(idQualquer) }).toThrow(new Error('Não existe todo com esse id'));
    });

    test('Deve permitir remover um Todo passando ele', () => {
        const todoID = todoMemoryRepository.newID();
        const todo = Todo.create(todoID, 'Título 1');
        todoMemoryRepository.add(todo);
        expect(todoMemoryRepository.getByID(todoID)).toBe(todo);
        todoMemoryRepository.remove(todo);
        expect(() => { todoMemoryRepository.getByID(todoID) }).toThrowError('Não existe todo com esse id');
        expect(() => { todoMemoryRepository.remove(todo) }).toThrowError('Todo não existe no repositório');
    })

    test('Deve permitir retornar todos os Todos salvos', () => {
        const todoID1 = todoMemoryRepository.newID();
        const todo1 = Todo.create(todoID1, 'Título 1');
        const todoID2 = todoMemoryRepository.newID();
        const todo2 = Todo.create(todoID2, 'Título 2');
        const todoID3 = todoMemoryRepository.newID();
        const todo3 = Todo.create(todoID3, 'Título 1');

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
        const todo1 = Todo.create(todoID1, 'Título 1');
        const todoID2 = todoMemoryRepository.newID();
        const todo2 = Todo.create(todoID2, 'Título 2');
        const todoID3 = todoMemoryRepository.newID();
        const todo3 = Todo.create(todoID3, 'Título 1');

        todoMemoryRepository.add(todo1);
        todoMemoryRepository.add(todo2);
        todoMemoryRepository.add(todo3);

        const quantity = todoMemoryRepository.allTodosQuantity()
        expect(quantity).toBe(3)
    })

    test('Deve retornar a quantidade total de todos completos', () => {
        const todoID1 = todoMemoryRepository.newID();
        const todo1 = Todo.create(todoID1, 'Título 1');
        const todoID2 = todoMemoryRepository.newID();
        const todo2 = Todo.create(todoID2, 'Título 2');
        const todoID3 = todoMemoryRepository.newID();
        const todo3 = Todo.create(todoID3, 'Título 1');

        todo2.toggleDone();
        todo3.toggleDone();

        todoMemoryRepository.add(todo1);
        todoMemoryRepository.add(todo2);
        todoMemoryRepository.add(todo3);

        const completedTodoQuantity = todoMemoryRepository.completedTodosQuantity();
        expect(completedTodoQuantity).toBe(2);
    })

    test('Deve conter método capaz de recupeerar Todos online e adicionar a lista de Todos', async () => {
        expect(todoMemoryRepository.getAllTodos().length).toBe(0);

        onlineTodoGatewayMock.fetchJSON.mockResolvedValueOnce(JSON.parse(`[
            {
              "id": "123",
              "title": "Lavar os pratos",
              "isDone": false
            },
            {
              "id": "321",
              "title": "Cortar a grama",
              "isDone": true
            },
            {
              "id": "111",
              "title": "Comprar pão",
              "isDone": false
            }
          ]`))
        await todoMemoryRepository.fetchTodosOnline(onlineTodoGatewayMock);
        expect(onlineTodoGatewayMock.fetchJSON).toBeCalledTimes(1)
        const allTodos = todoMemoryRepository.getAllTodos()
        expect(allTodos.length).toBe(3);
        expect(allTodos[0]).toEqual(Todo.recreate("123", "Lavar os pratos", false))
    })

    describe('getCompletedTodos test', () => {
        test('Deve retornar todos os todos com isDone true', () => {
            const todoID1 = todoMemoryRepository.newID();
            const todo1 = Todo.create(todoID1, 'Título 1');
            const todoID2 = todoMemoryRepository.newID();
            const todo2 = Todo.create(todoID2, 'Título 2');
            const todoID3 = todoMemoryRepository.newID();
            const todo3 = Todo.create(todoID3, 'Título 1');

            todo2.toggleDone();
            todo3.toggleDone();

            todoMemoryRepository.add(todo1);
            todoMemoryRepository.add(todo2);
            todoMemoryRepository.add(todo3);

            const completedTodos = todoMemoryRepository.getCompletedTodos()

            expect(completedTodos).toHaveLength(2)
            expect(completedTodos).toContainEqual(todo2)
            expect(completedTodos).toContainEqual(todo3)
        })
    })

    describe('removeCompletedTodos test', () => {
        test('Deve remover do repositório todos os todos com isDone true ', () => {
            const todoID1 = todoMemoryRepository.newID();
            const todo1 = Todo.create(todoID1, 'Título 1');
            const todoID2 = todoMemoryRepository.newID();
            const todo2 = Todo.create(todoID2, 'Título 2');
            const todoID3 = todoMemoryRepository.newID();
            const todo3 = Todo.create(todoID3, 'Título 1');

            todo2.toggleDone();
            todo3.toggleDone();

            todoMemoryRepository.add(todo1);
            todoMemoryRepository.add(todo2);
            todoMemoryRepository.add(todo3);

            expect(todoMemoryRepository.allTodosQuantity()).toBe(3)
            expect(todoMemoryRepository.completedTodosQuantity()).toBe(2)

            todoMemoryRepository.removeCompletedTodos()

            expect(todoMemoryRepository.allTodosQuantity()).toBe(1)
            expect(todoMemoryRepository.completedTodosQuantity()).toBe(0)
        })
        
    })

    describe('getActiveTodos test', () => {
        test('Deve retornar todos os todos com isDone false', () => {
            const todoID1 = todoMemoryRepository.newID();
            const todo1 = Todo.create(todoID1, 'Título 1');
            const todoID2 = todoMemoryRepository.newID();
            const todo2 = Todo.create(todoID2, 'Título 2');
            const todoID3 = todoMemoryRepository.newID();
            const todo3 = Todo.create(todoID3, 'Título 1');

            todo2.toggleDone();
            todo3.toggleDone();

            todoMemoryRepository.add(todo1);
            todoMemoryRepository.add(todo2);
            todoMemoryRepository.add(todo3);

            expect(todoMemoryRepository.allTodosQuantity()).toBe(3)

            const activeTodos = todoMemoryRepository.getActiveTodos()

            expect(activeTodos).toHaveLength(1)
        })        
    })

    describe('activeTodosQuantity test', () => {
        test('Deve retonar a quantidade de todos ainda ativos ', () => {
            const todoID1 = todoMemoryRepository.newID();
            const todo1 = Todo.create(todoID1, 'Título 1');
            const todoID2 = todoMemoryRepository.newID();
            const todo2 = Todo.create(todoID2, 'Título 2');
            const todoID3 = todoMemoryRepository.newID();
            const todo3 = Todo.create(todoID3, 'Título 1');

            todo2.toggleDone();
            todo3.toggleDone();

            todoMemoryRepository.add(todo1);
            todoMemoryRepository.add(todo2);
            todoMemoryRepository.add(todo3);

            expect(todoMemoryRepository.allTodosQuantity()).toBe(3)
            expect(todoMemoryRepository.activeTodosQuantity()).toBe(1)
        })
        
    })
    

})