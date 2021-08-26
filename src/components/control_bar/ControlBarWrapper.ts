import styled from "styled-components";

export const ControlBarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background-color: ${props => props.theme.boxBackgroundColor};
    padding: 5px;
    align-items: center;
    border-radius: 0px 0px 15px 15px;
    @media(max-width: ${props => props.theme.mobileBreakPoint}) {
        display: flex;
        flex-direction: column;
    }
`