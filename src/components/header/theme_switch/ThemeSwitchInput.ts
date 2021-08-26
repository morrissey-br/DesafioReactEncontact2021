import styled from "styled-components";
import { ThemeSwitchLabel } from "./ThemeSwitchLabel";

export const ThemeSwitchInput = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    margin: 0px;
    &:checked + ${ThemeSwitchLabel} {
        background: ${props => props.theme.boxBackgroundColor};
        &::after {
          left: calc(100% - 24px);
          background-color: ${props => props.theme.placeholderColor};
          transition: ${props => props.theme.transitionDuration};
        }
      }
`
