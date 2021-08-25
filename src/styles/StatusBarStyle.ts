import styled from "styled-components";

export const StatusBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: white;
    height: 40px;
    padding: 0px 10px;
    align-items: center;
`

export const ItemsLeftDiv = styled.div`
    font-size: .75rem;
`

export const RouterDiv = styled.div`
    
`

export const CleanCompletedDiv = styled.div`
    text-align: end;
    font-size: .75rem;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`

