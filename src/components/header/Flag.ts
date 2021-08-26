import styled from "styled-components";

type FlagProps = {
    active: boolean
}

export const Flag = styled.img<FlagProps>`
    height: 25px;
    width: 25px;
    margin: 3px;
    cursor: pointer;
    filter: ${props => props.active ? 'none' : 'grayscale(100%)'};
    transition-duration: ${props => props.theme.transitionDuration};

    :hover {
        transition-duration: ${props => props.theme.transitionDuration};
        filter: none;
    }
`
