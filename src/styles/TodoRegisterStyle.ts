import styled from "styled-components";
import { placeholderColor, successColor, transitionDuration } from "./_constants";

export const TodoRegisterDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    height: 70px;
    border-radius: 20px; 
    margin-bottom: 15px;
`
export const TodoRegisterIconDiv = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin: 20px;
    cursor: pointer;
    transition-property: color;
    transition-duration: ${transitionDuration};
    color: ${placeholderColor};
    :hover {
        transition-duration: ${transitionDuration};
        color: ${successColor};
    }

`
export const TodoRegisterInput = styled.input`
    flex-grow: 1;
    font-size: 1rem;
    border: none;
    outline: none;
`

