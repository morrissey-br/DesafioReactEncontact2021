import styled from "styled-components";
import { placeholderColor } from "../../styles/_constants";

export const TodoItemWrapper = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    user-select: none;  
    cursor: default;  
    height: 70px;
    border-bottom: 1px solid ${placeholderColor};
`