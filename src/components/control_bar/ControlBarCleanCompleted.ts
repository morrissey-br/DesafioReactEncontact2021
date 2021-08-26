import styled from "styled-components";

export const ControlBarCleanCompleted = styled.p`
    text-align: end;
    text-decoration: none;
    font-size: .75rem;
    padding: 8px;
    border: 1px solid transparent;   
    cursor: pointer; 
    color: ${props => props.theme.textColor};
    :visited {
        color: ${props => props.theme.textColor};
    }
    :hover {
        border: 1px solid ${props => props.theme.placeholderColor};
        border-radius: 15px;
    }
`