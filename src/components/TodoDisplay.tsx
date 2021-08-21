import React from 'react'
import { TodoItem } from './TodoItem'

const todoItems = [
    TodoItem(),
    TodoItem(),
    TodoItem()
]

export const TodoDisplay = () => {
    return (
        <div>
            <ul>
                {todoItems}
            </ul>
        </div>
    )
}
