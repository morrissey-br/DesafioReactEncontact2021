import React from 'react'

const placeholder = 'What needs to be done?'

export const TodoRegister = () => {
    return (
        <div>
            <input className='todoRegisterInput' type="text" name="todoRegisterInput" id="todoRegisterInput" placeholder={placeholder} />
        </div>
    )
}
