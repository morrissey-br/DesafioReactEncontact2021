import styled from "styled-components";
import { dangerColor, placeholderColor, transitionDuration } from "../../styles/_constants";
import { TodoItemWrapper } from "./TodoItemWrapper";

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