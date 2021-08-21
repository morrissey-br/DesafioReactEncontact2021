import Todo from '../../core/model/Todo';

describe('Test Todos: ', () => {
    const todoID = '123';
    const todoTitle = 'Título 1';
    let todo: Todo;
    beforeEach(() => {
        todo = new Todo(todoID, todoTitle);
    })
    test('Todos devem iniciar como não completos e devem ter método para finaliza-lo e reabri-lo', () => {
        expect(todo.getIsDone).toBeFalsy();
        todo.finish();
        expect(todo.getIsDone).toBeTruthy();
        todo.reopen();
        expect(todo.getIsDone).toBeFalsy();
    })
    test('Todos devem ter método que altera seu título', () => {
        const newTitle = 'Título 2';
        todo.changeTitle(newTitle);
        expect(todo.getTitle).toBe(newTitle);
    })
})