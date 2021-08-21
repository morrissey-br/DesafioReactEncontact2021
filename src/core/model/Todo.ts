export default class Todo {
    private id: String;
    private title: String;
    private isDone: boolean = false;

    constructor(id: String, title: String) {
        this.id = id;
        this.title = title;
    }

    get getID(): String {
        return this.id;
    }
    get getTitle(): String {
        return this.title;
    }
    get getIsDone(): boolean {
        return this.isDone;
    }

    finish() {
        this.isDone = true;
    }

    reopen() {
        this.isDone = false;
    }

    changeTitle(newTitle: String) {
        this.title = newTitle;
    }
}