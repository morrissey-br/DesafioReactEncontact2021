import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { TodoRegisterWrapper } from './TodoRegisterWrapper'
import { TodoRegisterAllDone } from './TodoRegisterAllDone'
import { TodoRegisterInput } from './TodoRegisterInput'


const placeholder = 'What needs to be done?'

type TodoRegisterProps = {
    onTodoRegister: (title: string) => void;
    onTodoCheckAll: () => void;
}

export const TodoRegister = ({ onTodoRegister, onTodoCheckAll }: TodoRegisterProps) => {

    const [value, setvalue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setvalue(event.target.value)
    }

    const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if(value.length > 0) {
                onTodoRegister(value)
                setvalue('')
            }
        }
    }

    const handleCheck = () => {
        onTodoCheckAll();
    }

    return (
        <TodoRegisterWrapper>
            <TodoRegisterAllDone className='todoRegisterIconDiv' onClick={handleCheck}>
                <FontAwesomeIcon icon={faCheck}  />
            </TodoRegisterAllDone>
            <TodoRegisterInput className='todoRegisterInput' type="text" name="todoRegisterInput"
                id="todoRegisterInput" placeholder={placeholder} value={value}
                onChange={handleChange} onKeyDown={handleSubmit} />
        </TodoRegisterWrapper>
    )
}
