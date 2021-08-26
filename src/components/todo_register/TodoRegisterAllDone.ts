import styled from "styled-components";

export const TodoRegisterAllDone = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin: 20px;
    cursor: pointer;
    transition-property: color;
    transition-duration: ${props => props.theme.transitionDuration};
    color: ${props => props.theme.placeholderColor};
    :hover {
        transition-duration: ${props => props.theme.transitionDuration};
        color: ${props => props.theme.successColor};
    }

`