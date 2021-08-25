import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { TodoRegisterDiv, TodoRegisterIconDiv, TodoRegisterInput } from '../styles/TodoRegisterStyle'

const placeholder = 'What needs to be done?'

type TodoRegisterProps = {
    onTodoRegister: (title: string) => void;
    onTodoCheckAll: () => void;
}

export const TodoRegister = ({ onTodoRegister, onTodoCheckAll }: TodoRegisterProps) => {

    const [state, setstate] = useState({
        value: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setstate({ value: event.target.value })
    }

    const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onTodoRegister(state.value)
            setstate({value: ''})
        }
    }

    const handleCheck = () => {
        onTodoCheckAll();
    }

    return (
        <TodoRegisterDiv>
            <TodoRegisterIconDiv className='todoRegisterIconDiv' onClick={handleCheck}>
                <FontAwesomeIcon icon={faCheck}  />
            </TodoRegisterIconDiv>
            <TodoRegisterInput className='todoRegisterInput' type="text" name="todoRegisterInput"
                id="todoRegisterInput" placeholder={placeholder} value={state.value}
                onChange={handleChange} onKeyDown={handleSubmit} />
        </TodoRegisterDiv>
    )
}
