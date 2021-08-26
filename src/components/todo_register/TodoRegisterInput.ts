import styled from "styled-components";

export const TodoRegisterInput = styled.input`
    flex-grow: 1;
    font-size: 1rem;
    border: none;
    outline: none;
    color: ${props => props.theme.textColor};
    background-color: transparent;
    ::placeholder {
        color: ${props => props.theme.placeholderColor}
    }
`