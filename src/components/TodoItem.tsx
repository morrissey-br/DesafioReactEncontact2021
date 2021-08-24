import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Todo from '../core/model/Todo'

type TodoItemProps = {
    todo: {
        id: string,
        title: string,
        isDone: boolean
    },
    onClick: (todoID: string) => void,
    onDelete: (todoID: string) => void
}

export const TodoItem = ({todo, onClick, onDelete}: TodoItemProps) => {

    const handleClick = () => {
        onClick(todo.id)
    }

    const handleDelete = () => {
        onDelete(todo.id)
    }

    return (
        <div className='todoItemDiv' >
            <div className='todoItemIconDiv todoItemCheckIcon' onClick={handleClick}>
                <FontAwesomeIcon icon={todo.isDone ? faCheckCircle : faCircle} />
            </div>
            <p className={`todoItemTitle ${todo.isDone ? 'todoItemTitleDone' : ''}`} onClick={handleClick}>{todo.title}</p>
            <div className='todoItemIconDiv todoItemDeleteIcon' onClick={handleDelete}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    )
}
