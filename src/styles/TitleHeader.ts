import styled from "styled-components";
import {mobileBreakPoint} from './_constants'

export const TitleHeaderContent = styled.h1`
    font-family: 'PoiretOne'!important;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 15px;

    @media(max-width: ${mobileBreakPoint}) {
        text-align: left;
    }
`