import styled from "styled-components";
import { placeholderColor, transitionDuration } from "../../styles/_constants";

type TodoItemTitleProps = {
    isDone: boolean,
}

export const TodoItemTitle = styled.p<TodoItemTitleProps>`
    font-size: 1rem;
    flex-grow: 1;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
    color: ${props => props.isDone ? placeholderColor : 'black'};
    transition: ${transitionDuration};
    
`