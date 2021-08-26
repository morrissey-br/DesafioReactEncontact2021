import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 18px;
        box-sizing: border-box!important;
    }

    * {
        font-family: 'Roboto'!important; 
        box-sizing: border-box;
    }

     body {
        background-color: ${props => props.theme.backgroundColor};    
        font-family: 'Roboto'!important;   
        transition-duration: ${props => props.theme.transitionDuration};
    }
`