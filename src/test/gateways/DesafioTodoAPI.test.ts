import DesafioTodoAPI from "../../core/gateways/DesafioTodoAPI"

describe('DesafioTodoAPI tests: ', () => {
    let desafioTodoAPI: DesafioTodoAPI;
    beforeEach(() => {
        desafioTodoAPI = new DesafioTodoAPI()
    })

    test('Deve conter método que retornar objeto JSON com a lista de objetos TodoDTO', async () => {
        const json = await desafioTodoAPI.fetchJSON()
        expect(json).toEqual(JSON.parse(`[
            {
              "id": "flrGI",
              "title": "Lavar os pratos",
              "isDone": false
            },
            {
              "id": "Tw-I9",
              "title": "Cortar a grama",
              "isDone": true
            },
            {
              "id": "7f2sf",
              "title": "Comprar pão",
              "isDone": false
            }
          ]`))
    })
})