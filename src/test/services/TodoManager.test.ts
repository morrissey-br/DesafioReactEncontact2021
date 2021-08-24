import { TodoRegister } from '../../components/TodoRegister';
import Todo from '../../core/model/Todo';
import ITodoRepository from '../../core/services/ITodoRepository'
import TodoManager from '../../core/services/TodoManager'

describe('TodoManager tests', () => {
    const todoRepositoryMock: jest.Mocked<ITodoRepository> = {
        add: jest.fn(),
        newID: jest.fn(),
        remove: jest.fn(),
        getByID: jest.fn(),
        getAllTodos: jest.fn(),
        activeTodosQuantity: jest.fn(),
        allTodosQuantity: jest.fn(),
        completedTodosQuantity: jest.fn(),
        getActiveTodos: jest.fn(),
        getCompletedTodos: jest.fn(),        
        removeCompletedTodos: jest.fn(),
    }
    const todoManager = new TodoManager(todoRepositoryMock);


    describe('createNewTodo test', () => {
        test('Deve criar um todo a partir de um id gerado e do título e adicionar ao repositório', () => {

            const title = 'Título 1'
            todoManager.createNewTodo(title)
            expect(todoRepositoryMock.newID).toBeCalledTimes(1)
            expect(todoRepositoryMock.add).toBeCalledTimes(1)
        })
    })

    describe('removeTodo test', () => {
        test('Deve remover o todo com o id informado chamando a função de remoção do repositório', () => {
            const todoID = '123'
            todoManager.removeTodo(todoID)
            expect(todoRepositoryMock.getByID).toBeCalledWith(todoID)
            expect(todoRepositoryMock.remove).toBeCalled()
        })
    })

    describe('changeTodoTitle test', () => {
        test('Deve encontrar o todo pelo id e mudar seu título', () => {
            const todoID = '123'
            const title = 'Título 1'
            const newTitle = 'Título 2'
            const todo = Todo.create(todoID, title)
            todoRepositoryMock.getByID.mockReturnValue(todo)
            todoManager.changeTodoTitle(todoID, newTitle)
            expect(todoRepositoryMock.getByID).toBeCalledWith(todoID)
            expect(todo.getTitle).toBe(newTitle)
        })
    })
    describe('toggleDoneTodo test', () => {
        const todoID = '123'
        const title = 'Título 1'
        const todo = Todo.create(todoID, title)
        expect(todo.getIsDone).toBe(false)
        todoRepositoryMock.getByID.mockReturnValue(todo)
        todoManager.toggleDoneTodo(todoID)
        expect(todoRepositoryMock.getByID).toBeCalledWith(todoID)
        expect(todo.getIsDone).toBe(true)
        todoManager.toggleDoneTodo(todoID)
        expect(todoRepositoryMock.getByID).toBeCalledWith(todoID)
        expect(todo.getIsDone).toBe(false)
    })

    describe('toggleDoneAllTodos test', () => {
        test('Deve mudar o estado de isDone de todos os todos para true mas, se assim já estiverem, mudar para false', () => {
            const todoID = '123'
            const todoID2 = '321'
            const todoID3 = '111'
            const title = 'Título 1'
            const title2 = 'Título 2'
            const title3 = 'Título 3'
            const todo = Todo.create(todoID, title)
            const todo2 = Todo.create(todoID2, title2)
            const todo3 = Todo.recreate(todoID3, title3, true)
            expect(todo.getIsDone).toBe(false)
            expect(todo2.getIsDone).toBe(false)
            expect(todo3.getIsDone).toBe(true)
            todoRepositoryMock.getAllTodos.mockReturnValue([todo, todo2, todo3])
            todoManager.toggleDoneAllTodos()
            expect(todoRepositoryMock.getAllTodos).toBeCalled
            expect(todo.getIsDone).toBe(true)
            expect(todo2.getIsDone).toBe(true)
            expect(todo3.getIsDone).toBe(true)
            todoManager.toggleDoneAllTodos()
            expect(todoRepositoryMock.getAllTodos).toBeCalled
            expect(todo.getIsDone).toBe(false)
            expect(todo2.getIsDone).toBe(false)
            expect(todo3.getIsDone).toBe(false)
        })
    })
})