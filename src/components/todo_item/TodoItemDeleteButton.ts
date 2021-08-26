import styled from "styled-components";
import { TodoItemWrapper } from "./TodoItemWrapper";

export const TodoItemDeleteButton = styled.button`
    border: none;
    background-color: transparent;
    color: transparent;
    font-size: 1rem;
    padding: 20px;
    cursor: pointer;
    transition-duration: ${props => props.theme.transitionDuration};
    transition-property: color;
    ${TodoItemWrapper}:hover & {
        transition-duration: ${props => props.theme.transitionDuration};
        color: ${props => props.theme.placeholderColor};
    }
    :hover {
        transition-duration: ${props => props.theme.transitionDuration};
        color: ${props => props.theme.dangerColor}!important;
    }
`