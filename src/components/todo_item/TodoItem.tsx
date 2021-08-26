import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { TodoItemWrapper } from './TodoItemWrapper'
import { TodoItemInput } from './TodoItemInput'
import { TodoItemTitle } from './TodoItemTitle'
import { TodoItemCheckButton } from './TodoItemCheckButton'
import { TodoItemDeleteButton } from './TodoItemDeleteButton'

type TodoItemProps = {
    todo: {
        id: string,
        title: string,
        isDone: boolean
    },
    onCheckClick: (todoID: string) => void,
    onDeleteClick: (todoID: string) => void,
    onEditTitleFinish: (todoID: string, newTitle: string) => void
}

export const TodoItem = ({ todo, onCheckClick, onDeleteClick, onEditTitleFinish }: TodoItemProps) => {

    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(todo.title)

    const handleCheckClick = () => {
        onCheckClick(todo.id)
    }

    const handleDeleteClick = () => {
        onDeleteClick(todo.id)
    }

    const handleEditDoubleClick = () => {
        if (!todo.isDone) {
            setIsEditing(true)
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleInputBlur = () => {
        setValue(todo.title)
        setIsEditing(false)
    }

    const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (value.length > 0) {
                onEditTitleFinish(todo.id, value)
            } else {
                setValue(todo.title)
            }
            setIsEditing(false)
        }
    }

    return (
        <TodoItemWrapper>
            <TodoItemCheckButton isDone={todo.isDone} onClick={handleCheckClick}>
                <FontAwesomeIcon icon={todo.isDone ? faCheckCircle : faCircle} />
            </TodoItemCheckButton>
            {isEditing ? 
                (<TodoItemInput autoFocus type='text' value={value} onBlur={handleInputBlur} onKeyDown={handleInputEnter} onChange={handleInputChange} />) :
                (<TodoItemTitle isDone={todo.isDone} onDoubleClick={handleEditDoubleClick}>{todo.title}</TodoItemTitle>)
            }
            <TodoItemDeleteButton onClick={handleDeleteClick}>
                <FontAwesomeIcon icon={faTimes} />
            </TodoItemDeleteButton>
        </TodoItemWrapper>
    )
}
