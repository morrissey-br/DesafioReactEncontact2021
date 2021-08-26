import styled from "styled-components";

export const ThemeSwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: ${props => props.theme.placeholderColor};
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    left: 0;
    background: ${props => props.theme.boxBackgroundColor};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: ${props => props.theme.transitionDuration};
  }
`;