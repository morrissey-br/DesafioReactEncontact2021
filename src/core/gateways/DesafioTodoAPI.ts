import { TodoDTO } from "../database/dtos/TodoDTO";
import { OnlineTodoGateway } from "../database/OnlineTodoGateway";

export default class DesafioTodoAPI implements OnlineTodoGateway {
    async fetchJSON(): Promise<TodoDTO[]> {
        try {
            const response = await fetch('http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact2021/todos')
            return await response.json()
        } catch(e) {
            console.log(e)
            return []
        }
    }

}