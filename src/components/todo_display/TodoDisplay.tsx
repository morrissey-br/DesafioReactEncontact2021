import React from 'react'
import Todo from '../../core/model/Todo'
import { TodoDisplayList } from './TodoDisplayList'
import { TodoItem } from '../todo_item/TodoItem'

type TodoDisplayProps = {
    todos: Todo[],
    onTodoCheck: (todoID: string) => void,
    onTodoDelete: (todoID: string) => void,
    onEditTitle: (todoID: string, newTitle: string) => void
}

export const TodoDisplay = ({ todos, onTodoCheck, onTodoDelete, onEditTitle }: TodoDisplayProps) => {

    const handleTodoItemCheckClick = (todoID: string) => {
        onTodoCheck(todoID)
    }

    const handleTodoItemDeleteClick = (todoID: string) => {
        onTodoDelete(todoID)
    }

    const handleTodoItemEditTitleFinish = (todoID: string, newTitle: string) => {
        onEditTitle(todoID, newTitle)
    }

    return (
        <TodoDisplayList>
            {todos.map((todo) => {
                return <TodoItem key={todo.getID} todo={{ id: todo.getID, title: todo.getTitle, isDone: todo.getIsDone }} onCheckClick={(todoID: string) => handleTodoItemCheckClick(todoID)} onDeleteClick={(todoID: string) => handleTodoItemDeleteClick(todoID)} onEditTitleFinish={(todoID: string, newTitle: string) => { handleTodoItemEditTitleFinish(todoID, newTitle) }} />
            })}
        </TodoDisplayList>
    )
}