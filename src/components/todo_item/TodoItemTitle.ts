import styled from "styled-components";

type TodoItemTitleProps = {
    isDone: boolean,
}

export const TodoItemTitle = styled.p<TodoItemTitleProps>`
    font-size: 1rem;
    flex-grow: 1;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
    color: ${props => props.isDone ? props.theme.placeholderColor : props.theme.textColor};
    transition: ${props => props.theme.transitionDuration};
    
`