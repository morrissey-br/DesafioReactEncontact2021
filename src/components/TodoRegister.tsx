import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const placeholder = 'What needs to be done?'

type TodoRegisterProps = {
    onRegister: (title: string) => void;
    onCheck: () => void;
}

export const TodoRegister = ({ onRegister, onCheck }: TodoRegisterProps) => {

    const [state, setstate] = useState({
        value: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setstate({ value: event.target.value })
    }

    const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onRegister(state.value)
            setstate({value: ''})
        }
    }

    const handleCheck = () => {
        onCheck();
    }

    return (
        <div className='todoRegisterDiv'>
            <div className='todoRegisterIconDiv' onClick={handleCheck}>
                <FontAwesomeIcon icon={faCheck}  />
            </div>
            <input className='todoRegisterInput' type="text" name="todoRegisterInput"
                id="todoRegisterInput" placeholder={placeholder} value={state.value}
                onChange={handleChange} onKeyDown={handleSubmit} />
        </div>
    )
}
