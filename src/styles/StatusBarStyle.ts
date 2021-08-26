import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobileBreakPoint, placeholderColor } from "./_constants";

export const StatusBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background-color: white;
    padding: 5px;
    align-items: center;
    border-radius: 0px 0px 15px 15px;
    @media(max-width: ${mobileBreakPoint}) {
        display: flex;
        flex-direction: column;
    }
`

export const ItemsLeftDiv = styled.div`
    font-size: .75rem;
    cursor: default;
    padding: 8px;
`

export const RouterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RouterLink = styled(NavLink)`
    text-decoration: none;
    font-size: .75rem;
    padding: 8px;
    margin: 0px 2px;
    border: 1px solid transparent;    
    :visited {
        color: black;
    }
    :hover, &.active {
        border: 1px solid ${placeholderColor};
        border-radius: 15px;
    }
`

export const CleanCompletedDiv = styled.div`
    text-align: end;
    text-decoration: none;
    font-size: .75rem;
    padding: 8px;
    border: 1px solid transparent;   
    cursor: pointer; 
    :visited {
        color: black;
    }
    :hover {
        border: 1px solid ${placeholderColor};
        border-radius: 15px;
    }
`

