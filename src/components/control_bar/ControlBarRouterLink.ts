import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ControlBarRouterLink = styled(NavLink)`
    text-decoration: none;
    font-size: .75rem;
    padding: 8px;
    margin: 0px 2px;
    border: 1px solid transparent;    
    color: ${props => props.theme.textColor};
    :visited {
        color: ${props => props.theme.textColor};
    }
    :hover, &.active {
        border: 1px solid ${props => props.theme.placeholderColor};
        border-radius: 15px;
    }
`