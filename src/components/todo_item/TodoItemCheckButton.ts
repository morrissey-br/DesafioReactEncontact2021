import styled from "styled-components"
import { placeholderColor, successColor, transitionDuration } from "../../styles/_constants"

type TodoItemCheckButtonProps = {
    isDone: boolean,
}

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