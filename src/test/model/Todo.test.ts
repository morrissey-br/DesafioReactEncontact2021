import Todo from '../../core/model/Todo';

describe('Test Todos: ', () => {
    const todoID = '123';
    const todoTitle = 'Título 1';
    let todo: Todo;
    test('Deve conter construtor que recria os todos recebendo todo o seu estado', () => {
        todo = Todo.recreate(todoID, todoTitle, true);
        expect(todo.getID).toBe(todoID);
        expect(todo.getTitle).toBe(todoTitle);
        expect(todo.getIsDone).toBe(true);
    })
    test('Todos devem iniciar como não completos', () => {
        todo = Todo.create(todoID, todoTitle);
        expect(todo.getIsDone).toBe(false);
    })
    test('Todos devem ter método que inverte seu estado de isDone', () => {
        todo = Todo.create(todoID, todoTitle);
        expect(todo.getIsDone).toBe(false);
        todo.toggleDone()
        expect(todo.getIsDone).toBe(true);
        todo.toggleDone()
        expect(todo.getIsDone).toBe(false);
    })
    test('Todos devem ter método que sempre altera estado de isDone para true', () => {
        todo = Todo.create(todoID, todoTitle);
        expect(todo.getIsDone).toBe(false);
        todo.finish();
        expect(todo.getIsDone).toBe(true);
        todo.finish();
        expect(todo.getIsDone).toBe(true);
    })
    test('Todos devem ter método que sempre altera seu estado de isDone para false', () => {
        todo = Todo.recreate(todoID, todoTitle, true)
        expect(todo.getIsDone).toBe(true);
        todo.reopen();
        expect(todo.getIsDone).toBe(false);
        todo.reopen();
        expect(todo.getIsDone).toBe(false);
    })
    test('Todos devem ter método que altera seu título', () => {
        todo = Todo.create(todoID, todoTitle);
        const newTitle = 'Título 2';
        todo.changeTitle(newTitle);
        expect(todo.getTitle).toBe(newTitle);
    })
})