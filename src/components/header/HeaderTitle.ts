import styled from "styled-components";

export const HeaderTitle = styled.h1`
    font-family: 'PoiretOne'!important;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 15px;
    color: ${props => props.theme.textColor};
    @media(max-width: ${props => props.theme.mobileBreakPoint}) {
        text-align: left;
    }
`