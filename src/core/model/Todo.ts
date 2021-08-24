export default class Todo {
    private id: string;
    private title: string;
    private isDone: boolean;

    private constructor(id: string, title: string, isDone: boolean) {
        this.id = id;
        this.title = title;
        this.isDone = isDone;
    }

    static create(id: string, title: string) {
        return new Todo(id, title, false)
    }

    static recreate(id: string, title: string, isDone: boolean) {
        return new Todo(id, title, isDone)
    }

    get getID(): string {
        return this.id;
    }
    get getTitle(): string {
        return this.title;
    }
    get getIsDone(): boolean {
        return this.isDone;
    }

    toggleDone() {
        this.isDone = !this.isDone
    }

    finish() {
        this.isDone = true
    }

    reopen() {
        this.isDone = false
    }

    changeTitle(newTitle: string) {
        this.title = newTitle;
    }
}