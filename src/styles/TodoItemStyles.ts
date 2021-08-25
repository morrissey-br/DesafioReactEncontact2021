import styled from 'styled-components'
import { dangerColor, placeholderColor, successColor, transitionDuration } from './_constants'

export const TodoItemWrapper = styled.li`
    display: flex;
    align-items: center;
    background-color: white;
    font-size: 1.5rem;
    user-select: none;
    cursor: pointer;
    height: 70px;
    border-bottom: 1px solid ${placeholderColor};
`

type TodoItemTitleProps = {
    isDone: boolean,
}

type TodoItemCheckButtonProps = {
    isDone: boolean,
}

export const TodoItemTitle = styled.p<TodoItemTitleProps>`
    font-size: 1rem;
    flex-grow: 1;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
    color: ${props => props.isDone ? placeholderColor : 'black'};
    transition: ${transitionDuration};
    
`
export const TodoItemCheckButton = styled.button<TodoItemCheckButtonProps>`
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin: 20px;
    cursor: pointer;
    transition-duration: ${transitionDuration};
    transition-property: color;
    color: ${placeholderColor};
    :hover {
        transition-duration: ${transitionDuration};
        color: ${successColor};
    }
`
export const TodoItemDeleteButton = styled.button`
    border: none;
    background-color: transparent;
    color: transparent;
    font-size: 1rem;
    padding: 20px;
    cursor: pointer;
    transition-duration: ${transitionDuration};
    transition-property: color;
    ${TodoItemWrapper}:hover & {
        transition-duration: ${transitionDuration};
        color: ${placeholderColor};
    }
    :hover {
        transition-duration: ${transitionDuration};
        color: ${dangerColor}!important;
    }
`

export const TodoItemInput = styled.input`
    flex-grow: 1;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    font-size: 1rem;
`
