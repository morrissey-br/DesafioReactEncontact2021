import styled from "styled-components"

type TodoItemCheckButtonProps = {
    isDone: boolean,
}

export const TodoItemCheckButton = styled.button<TodoItemCheckButtonProps>`
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin: 20px;
    cursor: pointer;
    transition-duration: ${props => props.theme.transitionDuration};
    transition-property: color;
    color: ${props => props.theme.placeholderColor};
    :hover {
        transition-duration: ${props => props.theme.transitionDuration};
        color: ${props => props.theme.successColor};
    }
`