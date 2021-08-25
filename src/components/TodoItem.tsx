import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { TodoItemCheckButton, TodoItemDeleteButton, TodoItemInput, TodoItemTitle, TodoItemWrapper } from '../styles/TodoItemStyles'

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

    const renderInputOrTitle = () => {
        if(isEditing) {
            return (<TodoItemInput autoFocus type='text' value={value} onBlur={handleInputBlur} onKeyDown={handleInputEnter} onChange={handleInputChange} />)
        } else {
            return (<TodoItemTitle isDone={todo.isDone} onDoubleClick={handleEditDoubleClick}>{todo.title}</TodoItemTitle>)
        }
    }

    const handleCheckClick = () => {
        onCheckClick(todo.id)
        console.log('foi')
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
            onEditTitleFinish(todo.id, value)
            setIsEditing(false)
        }
    }

    return (
        <TodoItemWrapper>
            <TodoItemCheckButton isDone={todo.isDone} onClick={handleCheckClick}>
                <FontAwesomeIcon icon={todo.isDone ? faCheckCircle : faCircle} />
            </TodoItemCheckButton>
            {renderInputOrTitle()}
            <TodoItemDeleteButton onClick={handleDeleteClick}>
                <FontAwesomeIcon icon={faTimes} />
            </TodoItemDeleteButton>
        </TodoItemWrapper>
    )
}
