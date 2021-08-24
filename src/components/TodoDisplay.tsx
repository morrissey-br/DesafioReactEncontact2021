import React from 'react'
import Todo from '../core/model/Todo'
import { TodoItem } from './TodoItem'

type TodoDisplayProps = {
    todos: Todo[],
    onTodoItemClick: (todoID: string) => void,
    onTodoItemDelete: (todoID: string) => void
}

export const TodoDisplay = ({ todos, onTodoItemClick, onTodoItemDelete }: TodoDisplayProps) => {

    const handleTodoItemClick = (todoID: string) => {
        onTodoItemClick(todoID)
    }

    const handleTodoItemDelete = (todoID: string) => {
        onTodoItemDelete(todoID)
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => {
                    return <TodoItem key={index} todo={{id: todo.getID, title: todo.getTitle, isDone: todo.getIsDone}} onClick={(todoID: string) => handleTodoItemClick(todoID)} onDelete={(todoID: string) => handleTodoItemDelete(todoID)} />
                })}
            </ul>
        </div>
    )
}